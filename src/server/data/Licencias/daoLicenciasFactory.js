import LicenciasDaoRam from './daoLicenciasArray.js'

class LicenciasDAOFactory {
    static getDao() {
        return new LicenciasDaoRam()
    }
}

export default LicenciasDAOFactory