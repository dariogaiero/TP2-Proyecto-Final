import CustomError from '../errores/CustomError.js'

class EstudiantesDao {

    async getAll() {
        throw new CustomError(500, 'falta implementar getAll!')
    }

    // async getByAge(edadMin, edadMax) {
    //     throw new CustomError(500, 'falta implementar getByAge!')
    // }

    async getByDNI(dni) {
        throw new CustomError(500, 'falta implementar getByDNI!')
    }

    async add(empleadoNuevo) {
        throw new CustomError(500, 'falta implementar add!')
    }

    async deleteByDNI(dni) {
        throw new CustomError(500, 'falta implementar deleteByDNI!')
    }

    async deleteAll() {
        throw new CustomError(500, 'falta implementar deleteAll!')
    }

    async updateByDNI(dni, nuevoEmpleado) {
        throw new CustomError(500, 'falta implementar updateByDNI!')
    }
}

export default EmpleadosDao