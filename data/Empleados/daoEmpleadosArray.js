import EmpleadosDao from './daoEmpleados.js'
import CustomError from '../errores/CustomError.js'

class EmpleadosDaoRam extends EmpleadosDao {

    constructor() {
        super()
        this.empleados = []
        // this.proxId = 0
    }

    async getAll() {
        try {
            return this.empleados
        } catch (err) {
            throw new CustomError(500, 'error al obtener todos los empleados', err)
        }
    }

    // async getByAge(edadMin, edadMax) {
    //     try {
    //         return EstudiantesDaoRam.filterByRange(this.estudiantes, 'edad', edadMin, edadMax)
    //     } catch (err) {
    //         throw new CustomError(500, 'error al obtener los estudiantes por edad', err)
    //     }
    // }

    // static filterByRange(elems, campo, minVal, maxVal) {
    //     const result = []
    //     for (const elem of elems) {
    //         if (elem[campo] >= minVal && elem[campo] <= maxVal) {
    //             result.push(elem)
    //         }
    //     }
    //     return result
    // }

    async getByDni(dni) {
        let buscado
        try {
            buscado = this.empleados.find(e => e.dni == dni)
        } catch (err) {
            throw new CustomError(500, 'error al buscar empleado por DNI', err)
        }

        if (!buscado) {
            throw new CustomError(404, 'empleado no encontrado con ese DNI', { dni })
        }

        return [buscado]
    }

    async add(empleadoNuevo) {
        try {
            await this.getByDni(empleadoNuevo.dni)
            throw new CustomError(404, 'ya existe un empleado con ese DNI', { dni: empleadoNuevo.dni })
        } catch (err) {
            try {
                // estuNuevo.id = this.proxId
                this.empleados.push(empleadoNuevo)
                // this.proxId++
                return empleado
            } catch (error) {
                throw new CustomError(500, 'error al crear un nuevo empleado', error)
            }
        }
    }

    async deleteByDNI(dni) {
        const posBuscada = this.empleados.findIndex(e => e.dni == dni)
        if (posBuscada == -1) {
            throw new CustomError(404, `no existe un empleado para borrar con DNI: ${dni}`, { dni })
        }
        try {
            this.empleados.splice(posBuscada, 1)
        } catch (error) {
            throw new CustomError(500, `error al borrar un empleado con DNI: ${dni}`, error)
        }
    }

    async deleteAll() {
        try {
            this.empleados.splice(0, this.empleados.length)
        } catch (error) {
            throw new CustomError(500, `error al borrar a todos los empleados`, error)
        }
    }

    async updateByDNI(dni, nuevoEmpleado) {
        let posBuscada
        try {
            posBuscada = this.empleados.findIndex(e => e.dni == dni)
        } catch (error) {
            throw new CustomError(500, `error inesperado al buscar empleado con DNI: ${dni}`, error)
        }

        if (posBuscada == -1) {
            throw new CustomError(404, `no se encontró para actualizar un empleados con DNI: ${dni}`, { dni })
        }

        try {
            this.empleados.splice(posBuscada, 1, nuevoEmpleado)
            return nuevoEmpleado
        } catch (error) {
            throw new CustomError(500, `error al reemplazar empleados con DNI: ${dni}`, error)
        }
    }
}

export default EmpleadosDaoRam