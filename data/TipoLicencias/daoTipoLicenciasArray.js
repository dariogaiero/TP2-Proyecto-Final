import TipoLicenciasDao from './daoTipoLicencias.js'
import CustomError from '../errores/CustomError.js'

class TipoLicenciasDaoRam extends TipoLicenciasDao {

    constructor() {
        super()
        this.tipoLicencias = []
        this.proxId = 0
    }

    async getAll() {
        try {
            return this.tipoLicencias
        } catch (err) {
            throw new CustomError(500, 'error al obtener todas los tipos de licencias', err)
        }
    }
    async getByID(id) {
        let buscado
        try {
            buscado = this.tipoLicencias.find(e => e.id == id)
        } catch (err) {
            throw new CustomError(500, 'error al buscar tipo de lincencia por ID', err)
        }

        if (!buscado) {
            throw new CustomError(404, 'tipo de licencia no encontrada con ese ID', { ID })
        }

        return [buscado]
    }

    async add(tipoLicenciaNueva) {
        try {
            await this.getByID(tipoLicenciaNueva.id)
            throw new CustomError(404, 'ya existe un tipo de licencia con ese ID', { id: tipoLicenciaNueva.id })
        } catch (err) {
            try {
                tipoLicenciaNueva.id = this.proxId
                this.tipoLicencias.push(tipoLicenciaNueva)
                this.proxId++
                return tipoLicenciaNueva
            } catch (error) {
                throw new CustomError(500, 'error al crear un tipo de licencia', error)
            }
        }
    }

    async deleteByID(id) {
        const posBuscada = this.tipoLicencias.findIndex(e => e.id == id)
        if (posBuscada == -1) {
            throw new CustomError(404, `no existe un tipo de licencias para borrar con ID: ${id}`, { id })
        }
        try {
            this.tipoLicencias.splice(posBuscada, 1)
        } catch (error) {
            throw new CustomError(500, `error al borrar un tipo de licencia con ID: ${id}`, error)
        }
    }

    async deleteAll() {
        try {
            this.tipoLicencias.splice(0, this.tipoLicencias.length)
        } catch (error) {
            throw new CustomError(500, `error al borrar a todos los tipos de licencias`, error)
        }
    }

    async updateByID(id, nuevoTipoLicencia) {
        let posBuscada
        try {
            posBuscada = this.tipoLicencias.findIndex(e => e.id == id )
        } catch (error) {
            throw new CustomError(500, `error inesperado al buscar un tipo de licencia con ID: ${id}`, error)
        }

        if (posBuscada == -1) {
            throw new CustomError(404, `no se encontró un tipo de licencia para actualizar con ID: ${id}`, { id })
        }

        try {
            this.tipoLicencias.splice(posBuscada, 1, nuevoTipoLicencia)
            return nuevoTipoLicencia
        } catch (error) {
            throw new CustomError(500, `error al reemplazar tipo de licencia con ID: ${id}`, error)
        }
    }
}

export default TipoLicenciasDaoRam