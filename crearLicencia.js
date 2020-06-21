class CrearLicencia {
    constructor(mailer, repoEmpleados, repoLicenciasPedidas, repoLicencias) {

        this.mailer = mailer
        this.empleados = repoEmpleados
        this.licenciasPedidas = repoLicenciasPedidas
        this.licencias = repoLicencias
    }

    _validarDatos(data) {
        // Valido que el DNI del empleado se encuentre en la base de empleados.
        // Valido que las fechas sean fechas validas y que no se superpongan con otro licencia ya cargada
        // valido que el tipo de licencia sea correcta
    }

    _confirmarLicencia(data) {
        // impacto datos de licencia en base de datos.
    }

    _programarAviso() {
        // Programo mail para dos dias antes de la fechaDesde de la licencia
        this.mailer.sendMail(data);
    }

    ejecutar(data) {

        this.validarDatos()
        this.confirmarLicencia()
        this.programarAviso()

    }
}

export default CrearLicencia