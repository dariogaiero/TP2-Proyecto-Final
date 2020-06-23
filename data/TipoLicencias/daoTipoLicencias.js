import CustomError from '../errores/CustomError.js'

class TipoLicenciasDao {

    async getAll() {
        throw new CustomError(500, 'falta implementar getAll!')
    }

    async getByID(id) {
        throw new CustomError(500, 'falta implementar getByID!')
    }

    async addl(tipoLicenciaNueva) {
        throw new CustomError(500, 'falta implementar add!')
    }

    async deleteByID(id) {
        throw new CustomError(500, 'falta implementar deleteByID!')
    }

    async deleteAll() {
        throw new CustomError(500, 'falta implementar deleteAll!')
    }

    async updateByID(id, tipoLicenciaNueva) {
        throw new CustomError(500, 'falta implementar updateByID!')
    }
}

export default TipoLicenciasDao