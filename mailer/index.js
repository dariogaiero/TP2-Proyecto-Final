const nodemailer = require('nodemailer');
const config = require('../config');

// import nodemailer from 'nodemailer';
// import config from '../config';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: config.mailer
});

function sendMail(mailOptions) {
    // return transporter.sendMail(mailOptions, function (error, info) {
    //     if (error)
    //         console.log("Error: "+error);
    //     else
    //         console.log('Email enviado: ' + info.response);
    // });



    let { result, msg } = transporter.sendMail(mailOptions, function (error, info) {

        let result
        let msg 

        console.log('llega 1')

        if (error) {
            // throw error
            result = false
            msg = error
            return { result, msg }
        }
        else {
            result = true
            msg = info.response
            return { result, msg }
        }

    });

    console.log('llega 2')


    return { result, msg }
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
    const { result, msg } = sendMail(mailOptions);

    return { result, msg }
}

module.exports = {
    sendLicenciaNotification
}; 