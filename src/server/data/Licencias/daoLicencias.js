import CustomError from '../errores/CustomError.js.js.js.js.js'

class LicenciasDao {

    async getAll() {
        throw new CustomError(500, 'falta implementar getAll!')
    }

    // async getByDates(fechaIni, fechaFin) {
    //     throw new CustomError(500, 'falta implementar getByDates!')
    // }

    async getByID(id) {
        throw new CustomError(500, 'falta implementar getByID!')
    }

    async addl(licenciaNueva) {
        throw new CustomError(500, 'falta implementar add!')
    }

    async deleteByID(id) {
        throw new CustomError(500, 'falta implementar deleteByID!')
    }

    async deleteAll() {
        throw new CustomError(500, 'falta implementar deleteAll!')
    }

    // async updateByID(id, licenciaNueva) {
    //     throw new CustomError(500, 'falta implementar updateByID!')
    // }
}

export default LicenciasDao