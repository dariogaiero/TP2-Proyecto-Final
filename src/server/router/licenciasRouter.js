import express from 'express'
import LicenciasApi from '../apis/licenciasAPI.js'

function getLicenciasRouter() {

    const router = express.Router()

    const licenciasAPI = new LicenciasApi()

    router.post('/', async (req, res) => {
        const licenciaParaAgregar = req.body

        try {
            const licenciaAgregada = await licenciasAPI.agregar(licenciaParaAgregar)
            res.status(201).json(licenciaAgregada)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    router.get('/', async (req, res) => {
        try {
            const queryParams = new Map(Object.entries(req.query))
            const licencias = await licenciasAPI.buscar(queryParams)
            res.json(licencias)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            await licenciasAPI.borrar(req.params.id)
            res.status(204).send()
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    router.delete('/', async (req, res) => {
        try {
            await licenciasAPI.borrarTodo()
            res.status(204).send()
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    router.put('/:id', async (req, res) => {
        const licenciaParaReemplazar = req.body

        try {
            const licenciaReemplazada = await licenciasAPI.reemplazar(req.params.id, licenciaParaReemplazar)
            res.json(licenciaReemplazada)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    return router
}
export { getLicenciasRouter }
