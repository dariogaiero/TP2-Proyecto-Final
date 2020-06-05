// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer')

module.export = class Mailer {

    constructor(service, mail, pass) {
        this.service = service
        this.mail = mail
        this.pass = pass

        this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: mail,
                pass: pass
            }
        });
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

// export default Mailer