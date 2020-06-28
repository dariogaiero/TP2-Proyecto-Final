class ListarLicenciaPorDNI {
    constructor(repoEmpleados, repoLicencias) {

        this.empleados = repoEmpleados
        this.licencias = repoLicencias
    }

    _validarDNI(dni) {
        let encontroEmpleado = false

        encontroEmpleado = await this.Empleados.getByDNI(dni)

        if (encontroEmpleado) {
            return true
        } else {
            return false
        }
    }


    ejecutar(dni) {
        this._validarDNI(dni)
        this._listarLicenciasPorDNI(dni)
    }
}

export default ListarLicenciaPorDNI