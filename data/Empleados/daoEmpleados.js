import CustomError from '../errores/CustomError.js'

class EstudiantesDao {

    async getAll() {
        throw new CustomError(500, 'falta implementar getAll!')
    }

    // async getByAge(edadMin, edadMax) {
    //     throw new CustomError(500, 'falta implementar getByAge!')
    // }

    async getByDni(dni) {
        throw new CustomError(500, 'falta implementar getByDni!')
    }

    async add(empleadoNuevo) {
        throw new CustomError(500, 'falta implementar add!')
    }

    async deleteByDNI(dni) {
        throw new CustomError(500, 'falta implementar deleteById!')
    }

    async deleteAll() {
        throw new CustomError(500, 'falta implementar deleteAll!')
    }

    async updateById(dni, nuevoEmpleado) {
        throw new CustomError(500, 'falta implementar updateById!')
    }
}

export default EstudiantesDao