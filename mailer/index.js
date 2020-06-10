import nodemailer from 'nodemailer';
import dns from 'dns';
// const nodemailer = require('nodemailer')

// module.export =

class Mailer {

    constructor(credenciales) {
 
        // this.validarEmail(credenciales.mail)

        this.service = credenciales.serv
        this.mail = credenciales.mail
        this.pass = credenciales.pass

        this.transporter = nodemailer.createTransport({
            service: this.service,
            auth: {
                user: this.mail,
                pass: this.pass
            }
        });

    }

    validarEmail(email) {

        // Valido el dominio
        let domain = email.split('@')[1];

        dns.resolve(domain, 'MX', function (err, addresses) {
            if (err) {
                // throw console.log("Dominio del mail erroneo")
                throw 'console.log(err)'

                // throw new Error('Dominio del mail erroneo')
                // console.log(err)
                // return { "msg": 'Dominio del mail erroneo', "result": false }
            }
            // }).catch(function (error) {
            //     return { "msg": "ERROR: " + error.response, "result": false }
        })
        // console.log('llega?')
        // return { "msg": "ERROR: " + error.response, "result": false }
        // console.log('result')
        // console.log(response.result)
        // return response
    }

    async sendMail(data) {

        const mailOptions = {
            from: 'Licencias <' + this.mail + '>',
            to: data.to,
            subject: data.subject,
            text: data.text,
        };

        var response = await this.transporter.sendMail(mailOptions).then(function () {
            return { "msg": 'Mail enviado correctamente', "result": true }

        }).catch(function (error) {
            return { "msg": "ERROR: " + error.response, "result": false }
        })

        return response

    }

}

export default Mailer