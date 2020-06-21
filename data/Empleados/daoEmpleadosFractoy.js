import EmpleadosDaoRam from './daoEmpleadosArray.js'

class EmpleadosDAOFactory {
    static getDao() {
        return new EmpleadosDaoRam()
    }
}

export default EmpleadosDAOFactory