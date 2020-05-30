const nodemailer = require('nodemailer');
const config = require('../config');

// import nodemailer from 'nodemailer';
// import config from '../config';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: config.mailer
});

async function sendMail(mailOptions) {
    // return transporter.sendMail(mailOptions, function (error, info) {
    //     if (error)
    //         console.log("Error: "+error);
    //     else
    //         console.log('Email enviado: ' + info.response);
    // });

    // let result
    // let msg

    // try {
    //     let info = await transporter.sendMail(mailOptions)
    //     result = true
    //     msg = info.messageId
    // } catch (error) {
    //     // throw error.message;
    //     result = false
    //     msg = error
    // }

    // return { result, msg }


    return await transporter.sendMail(mailOptions).then(function () {
        return { "msg": 'Mail enviado correctamente', "result": true }

    }).catch(function (error) {
        // console.error(" transporter.sendMail ", error)
        return { "msg": "ERROR: "+error.response, "result": false }

    })
}


async function sendLicenciaNotification(data) {
    const mailOptions = {
        from: 'Licencias <licenciastestnode@gmail.com>',
        // to: 'dariogaiero@gmail.com',
        to: data.to,
        // subject: 'Asunto del mail',
        subject: data.subject,
        // text: 'Prueba de envio de mail'
        text: data.text,
    };

    return response = sendMail(mailOptions);
}

module.exports = {
    sendLicenciaNotification
}; 