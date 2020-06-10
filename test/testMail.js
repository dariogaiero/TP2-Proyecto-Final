import Mailer from '../mailer/index.js';

const credsOK = {
    serv: 'gmail',
    mail: 'licenciastestnode@gmail.conex',
    pass: 'licenciastest2020'
}

const credsFake = {
    serv: 'gmail',
    mail: 'licenciastestnodeFAKE@gmail.com',
    pass: 'licenciastest2020'
}


async function testMailOK() {
    try {
        var dataMail = {
            to: 'dariogaiero@gmail.com',
            subject: 'Prueba mail licencias - TP2',
            text: 'Probando texto del mail'
        }

        const mail = new Mailer(credsOK)

        var response = await mail.sendMail(dataMail)

        return response

    } catch (error) {
        throw error.message;
    }
}

async function testMailFAKE() {

    try {
        var dataMail = {
            to: 'dariogaiero@gmail.com',
            subject: 'Prueba mail licencias - TP2',
            text: 'Probando texto del mail'
        }

        const mail = new Mailer(credsFake)

        var response = mail.sendMail(dataMail)

        return response

    } catch (error) {
        throw error.message;
    }
}

async function main() {

    let exitos = 0
    let finalizados = 0
    let errores = 0
    let contador = 0

    try {
        var tests = [
            testMailOK,
            testMailFAKE,
        ];

        console.log('running tests...\n')

        for (const test of tests) {
            contador++

            console.log(`${contador}- `)
            console.log(test)

            const response = await test()

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