// import mail from '../mailer/index';
// import { mail } from '../mailer/index';

// import Mailer from '../mailer/index.js';

const Mailer = require('../mailer/index.js');

async function testMailOK() {
    try {
        var dataMail = {
            to: 'dariogaiero@gmail.com',
            subject: 'Prueba mail licencias - TP2',
            text: 'Probando texto del mail'
        }

        const mail = new Mailer('gmail', 'licenciastestnode@gmail.com', 'licenciastest2020')

        return response = mail.sendMail(dataMail)

    } catch (error) {
        throw error.message;
    }
}

// async function testMailFAKE() {

//     try {
//         var dataMail = {
//             to: 'dariogaiero@gmail.com',
//             subject: 'Prueba mail licencias - TP2',
//             text: 'Probando texto del mail'
//         }

//         const mail = new Mailer('gmail', 'licenciastestnodeFAKE@gmail.com', 'licenciastest2020')

//         return response = mail.sendMail(dataMail)

//     } catch (error) {
//         throw error.message;
//     }
// }

async function main() {

    let exitos = 0
    let finalizados = 0
    let errores = 0

    try {
        var tests = [
            testMailOK(),
            // testMailFAKE(),
        ];

        console.log('running tests...\n')

        for (const test of tests) {

            console.log('LLAMO AL TEST')

            const response = await test

            console.log('RESPNSE DEL TEST'+response)

            if (response.result) {
                exitos++
                console.log(response.msg)
            } else {
                errores++
                console.log(response.msg)
            }
            finalizados++
        }

    } catch (error) {
        console.log(error)
    } finally {
        console.log('----------------------------------------')
        console.log(`Total de test: ${tests.length}`);
        console.log(`Test finalizados: ${finalizados}`);
        console.log(`Test OK: ${exitos}`);
        console.log(`Test erroneos: ${errores}`);
    }
}

main()