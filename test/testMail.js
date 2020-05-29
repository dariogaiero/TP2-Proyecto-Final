// import mail from '../mailer/index';
// import { sendLicenciaNotification } from './mailer/index';

const mail = require('../mailer/index');

async function testMail() {
    // let result = false;
    // let msg,

    try {
        var dataMail = {
            to: 'dariogaiero@gmail.com',
            subject: 'Prueba mail licencias - TP2',
            text: 'Probando texto del mail'
        }

        const { result, msg } = await mail.sendLicenciaNotification(dataMail)

        return { result, msg }

    } catch (error) {
        throw error.message;
    }
}

async function main() {

    let exitos = 0
    let finalizados = 0
    let errores = 0

    try {
        var tests = [
            testMail,
        ];

        console.log('running tests...\n')

        for (const test of tests) {
            const { result, msg } = await test()
            if (result) {
                errores++
                console.log(msg)
            } else {
                exitos++
                console.log(msg)
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