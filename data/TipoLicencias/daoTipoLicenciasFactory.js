import TipoLicenciasDaoRam from './daoTipoLicenciasArray.js'

class TipoLicenciasDAOFactory {
    static getDao() {
        return new TipoLicenciasDaoRam()
    }
}

export default TipoLicenciasDAOFactory