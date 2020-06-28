import Joi from '@hapi/joi'

class Licencia {

    constructor(id, dni, tipoLicencia, fechaDesde, fechaHasta) {
        this._id = id
        this.dni = dni
        this.tipoLicencia = tipoLicencia
        this.fechaDesde = fechaDesde
        this.fechaHasta = fechaHasta
    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    hasThisId(id) {
        return this._id == id
    }

    static fromDTO(dto) {
        Licencia.validar(dto)
        return new Licencia(dto.id, dto.dni, dto.tipoLicencia, dto.fechaDesde, dto.fechaHasta)
    }

    getDTO() {
        return {
            id: this._id,
            dni: this.dni,
            tipoLicencia: this.tipoLicencia,
            fechaDesde: this.fechaDesde,
            fechaHasta: this.fechaHasta
        }
    }

    static validar(licencia) {
        const licenciaSchema = {
            id: Joi.number().integer().min(0),
            dni: Joi.number().min(1).max(99999999).required(),
            tipoLicencia: Joi.string().alphanum().min(1).required(),
            fechaDesde: Joi.date().format('YYYY-MM-DD').options({ convert: false }),
            fechaHasta: Joi.date().format('YYYY-MM-DD').options({ convert: false }),
        }

        const { error } = Joi.validate(licencia, licenciaSchema)
        if (error) {
            throw error
        }
    }
}

export default Licencia