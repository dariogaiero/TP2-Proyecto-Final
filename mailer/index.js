const nodemailer = require('nodemailer');
// const config = require('../config');


export class Mailer {

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

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: config.mailer
    // });

    async sendMail(data) {

        // async function sendMail(mailOptions) {

        //     return await transporter.sendMail(mailOptions).then(function () {
        //         return { "msg": 'Mail enviado correctamente', "result": true }

        //     }).catch(function (error) {
        //         return { "msg": "ERROR: " + error.response, "result": false }
        //     })
        // }


        // async function sendLicenciaNotification(data) {
        //     const mailOptions = {
        //         from: 'Licencias <licenciastestnode@gmail.com>',
        //         to: data.to,
        //         subject: data.subject,
        //         text: data.text,
        //     };

        //     return response = sendMail(mailOptions);
        // }


        const mailOptions = {
            from: 'Licencias <'+this.mail+'>',
            to: data.to,
            subject: data.subject,
            text: data.text,
        };

        return await transporter.sendMail(mailOptions).then(function () {
            return { "msg": 'Mail enviado correctamente', "result": true }

        }).catch(function (error) {
            return { "msg": "ERROR: " + error.response, "result": false }
        })

    }

}

// export default Mailer