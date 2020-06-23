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

        // Valido que el DNI del empleado se encuentre en la base de empleados.
        encontroEmpleado = await this.Empleados.getByDNI(data.dni)

        // valido que el tipo de licencia sea correcta
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

        // impacto datos de licencia en base de datos.
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
        data.subject = 'Recordatorio de ' +tipoLicencia
        data.text = 'Recuerde en que en dos dias comienza la licencia ' +tipoLicencia

        // Programo mail para dos dias antes de la fechaDesde de la licencia
        this.mailer.sendMail(data);
    }

    ejecutar(nuevaLicencia) {

        this.validarDatos(nuevaLicencia)
        this.confirmarLicencia(nuevaLicencia)
        this.programarMail(nuevaLicencia.dni, nuevaLicencia.tipoLicencia, nuevaLicencia.fechaDesde)

    }
}

export default CrearLicencia