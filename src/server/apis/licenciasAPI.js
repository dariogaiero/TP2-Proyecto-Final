import Licencia from '../models/licencia.js'
import LicenciasDAOFactory from '../data/Licecncias/daoLicenciasFactory.js'
import CustomError from '../errores/CustomError.js'

class LicenciasApi {

    constructor() {
        this.licenciasDAO = LicenciasDAOFactory.getDao()
    }

    async agregar(licenciaParaAgregar) {
        LicenciaApi.aseguraLicenciaValida(licenciaParaAgregar)
        const licenciaAgregada = await this.licenciaDAO.add(licenciaParaAgregar)
        return licenciaAgregada
    }

    async buscar(queryParams) {
        let licencias
        if (queryParams.size == 0) {
            licencias = await this.licenciasDAO.getAll()
        } else if (queryParams.has('dni')) {
            estudiantes = await this.estudiantesDAO.getByDni(queryParams.get('dni'))
            // } else if (queryParams.has('edadMin') && queryParams.has('edadMax')) {
            //     estudiantes = await this.estudiantesDAO.getByAge(queryParams.get('edadMin'), queryParams.get('edadMax'))
        } else {
            throw new CustomError(400, 'parametros de consulta invalidos', queryParams)
        }
        return licencias
    }

    async borrar(id) {
        await this.licenciasDAO.deleteById(id)
    }

    async borrarTodo() {
        await this.licenciasDAO.deleteAll()
    }

    async reemplazar(id, licenciaParaReemplazar) {
        licenciaApi.asegurarlicenciaValida(licenciaParaReemplazar)
        LicenciaApi.asegurarQueCoincidenLosIds(licenciaParaReemplazar.id, id)
        const licenciaReemplazado = await this.licenciasDAO.updateById(id, licenciaParaReemplazar)
        return licenciaReemplazado
    }

    static asegurarQueCoincidenLosIds(id1, id2) {
        if (id1 != id2) {
            throw new CustomError(400, 'no coinciden los ids enviados', { id1, id2 })
        }
    }

    static asegurarlicenciaValida(licencia) {
        try {
            Licencia.validar(licencia)
        } catch (error) {
            throw new CustomError(400, 'la licencia posee un formato json invalido o faltan datos', error)
        }
    }
}

export default LicenciasApi