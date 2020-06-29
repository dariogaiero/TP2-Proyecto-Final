import Joi from '@hapi/joi'

class Empleado {

    constructor(id, dni, nombre, apellido, fechaNacimiento, sexo, fechaAlta, posicion) {
        this._id = id
        this.dni = dni
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNacimiento = fechaNacimiento
        this.sexo = sexo
        this.fechaAlta = fechaAlta
        this.posicion = posicion
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
        Empleado.validar(dto)
        return new empleado(dto.id, dto.dni, dto.nombre, dto.apellido, dto.fechaNacimiento, dto.sexo, dto.fechaAlta, dto.posicion)
    }

    getDTO() {
        return {
            id: this._id,
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            fechaNacimiento: this.fechaNacimiento,
            sexo: this.sexo,
            fechaAlta: this.fechaAlta,
            posicion: this.posicion
        }
    }

    static validar(empleado) {
        const empleadoSchema = {
            id: Joi.number().integer().min(0),
            dni: Joi.number().min(1).max(99999999).required(),
            nombre: Joi.string().alphanum().min(1).required(),
            apellido: Joi.string().alphanum().min(1).required(),
            fechaNacimiento: Joi.date().format('YYYY-MM-DD').options({ convert: false }),
            sexo: Joi.string().alphanum().min(1).max(1).required(),
            fechaAlta: Joi.date().format('YYYY-MM-DD').options({ convert: false }),
            posicion: Joi.string().alphanum().min(1).required()
        }

        const { error } = Joi.validate(empleado, empleadoSchema)
        if (error) {
            throw error
        }
    }
}

export default Empleado