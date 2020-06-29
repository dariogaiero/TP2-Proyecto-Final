import request from 'request-promise-native'

class Cliente {

    constructor(ipServidor, puerto) {
        this.puerto = puerto
        this.serverUrl = `${ipServidor}:${puerto}/api/licencias`
    }

    async crearLicencia(licencia) {
        const postOpt = {
            method: 'POST',
            uri: this.serverUrl,
            json: true
        }
        if (licencia) {
            postOpt.body = licencia
        }

        const cliDTO = await request(postOpt)
        return cliDTO
    }

    async borrarLicencia(id) {
        await request({
            method: 'DELETE',
            uri: this.serverUrl + '/' + id,
            json: true
        })
    }

    async borrarLicencias() {
        await request({
            method: 'DELETE',
            uri: this.serverUrl,
            json: true
        })
    }

    async buscarTodas() {
        const cliDTOs = await request({
            method: 'GET',
            uri: this.serverUrl,
            json: true
        })
        return cliDTOs
    }

    async buscarPorParametros(params) {
        const cliDTOs = await request({
            method: 'GET',
            uri: this.serverUrl,
            qs: params,
            json: true
        })
        return cliDTOs
    }

    async reemplazarPorId(id, licencia) {
        const cliDTO = await request({
            method: 'PUT',
            uri: this.serverUrl + '/' + id,
            body: licencia,
            json: true
        })
        return cliDTO
    }
}

export default Cliente