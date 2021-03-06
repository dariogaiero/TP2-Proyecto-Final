// import EmpleadosDAOFactory from './data/Empleados/daoEmpleadosFractoy.js'
// import LicenciasDAOFactory from './data/Licncias/daoLicenciasFractoy.js'
// import TipoLicecniasDAOFactory from './data/TipoLicencias/daoTipoLicenciasFractoy.js'


class CrearLicencia {
    constructor(mailer, repoEmpleados, repoLicencias, repoTipoLicencias, repoTareasProg) {

        this.mailer = mailer
        this.empleados = repoEmpleados
        this.licencias = repoLicencias
        this.tipoLicencias = repoTipoLicencias
        this.tareasProg = repoTareasProg
    }

    _validarDatos(data) {
        let encontroEmpleado = false
        let encontroTipoLicencia = false

        encontroEmpleado = await this.Empleados.getByDNI(data.dni)

        encontroTipoLicencia = await this.tipoLicencias.getByID(data.tipoLicencias)

        // Valido que las fechas sean fechas validas y que no se superpongan con otro licencia ya cargada

        if (encontroEmpleado && encontroTipoLicencia) {
            return true
        } else {
            return false
        }
    }

    _confirmarLicencia(nuevaLicencia) {

        // Como genero un ID dinamico????

        this.licencias.add(nuevaLicencia)
    }

    _programarMail(dni, tipoLicencia, fechaDesde) {

        const data = {
            to: null,
            subject: null,
            text: null
        }

        const empleado = await this.Empleados.getByDNI(dni)

        data.to = empleado.dni
        data.subject = 'Recordatorio de ' + tipoLicencia
        data.text = 'Recuerde en que en dos dias comienza la licencia ' + tipoLicencia

        // Programo mail para dos dias antes de la fechaDesde de la licencia
        this.mailer.sendMail(data);
    }

    ejecutar(nuevaLicencia) {

        this._validarDatos(nuevaLicencia)
        this._confirmarLicencia(nuevaLicencia)
        this._programarMail(nuevaLicencia.dni, nuevaLicencia.tipoLicencia, nuevaLicencia.fechaDesde)

    }
}

export default CrearLicencia