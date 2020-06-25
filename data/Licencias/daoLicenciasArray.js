import LicenciasDao from './daoLicencias.js'
import CustomError from '../errores/CustomError.js'

class LicenciasDaoRam extends LicenciasDao {

    constructor() {
        super()
        this.licencias = []
        this.proxId = 0
        this.tipoLicencias = [
            {ID: 1, name: 'Vacaciones'},
            {ID: 2, name: 'Enfermedad'},
            {ID: 3, name: 'Dia paternidad'},
            {ID: 4, name: 'Dia de estudio'},
        ]
    }

    async getAll() {
        try {
            return this.licencias
        } catch (err) {
            throw new CustomError(500, 'error al obtener todas las licencias', err)
        }
    }

    async getByID(id) {
        let buscado
        try {
            buscado = this.licencias.find(e => e.id == id)
        } catch (err) {
            throw new CustomError(500, 'error al buscar lincencia por ID', err)
        }

        if (!buscado) {
            throw new CustomError(404, 'licencia no encontrado con ese ID', { ID })
        }

        return [buscado]
    }

    async add(licenciaNueva) {
        try {
            await this.getByID(licenciaNueva.id)
            throw new CustomError(404, 'ya existe una licencia con ese ID', { id: licenciaNueva.id })
        } catch (err) {
            try {
                licenciaNueva.id = this.proxId
                this.licencias.push(licenciaNueva)
                this.proxId++
                return licenciaNueva
            } catch (error) {
                throw new CustomError(500, 'error al crear una licencia', error)
            }
        }
    }

    async deleteByID(id) {
        const posBuscada = this.licencias.findIndex(e => e.id == id)
        if (posBuscada == -1) {
            throw new CustomError(404, `no existe una licencia para borrar con ID: ${id}`, { id })
        }
        try {
            this.licencias.splice(posBuscada, 1)
        } catch (error) {
            throw new CustomError(500, `error al borrar una licencia con ID: ${id}`, error)
        }
    }

    async deleteAll() {
        try {
            this.licencias.splice(0, this.licencias.length)
        } catch (error) {
            throw new CustomError(500, `error al borrar a todas las licencias`, error)
        }
    }
}

export default LicenciasDaoRam