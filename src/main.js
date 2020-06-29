import Servidor from './server/app.js'

const app = new Servidor()

const PORT = process.env.PORT

app.setOnReady(async (port) => {
    // eslint-disable-next-line no-console
    console.log(`listening on port: ${port}`)
})

app.start(PORT)