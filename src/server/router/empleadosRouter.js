import express from 'express'
import EmpleadosApi from '../apis/empleadosAPI.js'

function getEmpleadosRouter() {

    const router = express.Router()

    const empleadosAPI = new EmpleadosApi()

    router.post('/', async (req, res) => {
        const empleadoParaAgregar = req.body

        try {
            const empleadoAgregado = await empleadosAPI.agregar(empleadoParaAgregar)
            res.status(201).json(empleadoAgregado)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    router.get('/', async (req, res) => {
        try {
            const queryParams = new Map(Object.entries(req.query))
            const empleados = await empleadosAPI.buscar(queryParams)
            res.json(empleados)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            await empleadosAPI.borrar(req.params.id)
            res.status(204).send()
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    router.delete('/', async (req, res) => {
        try {
            await empleadosAPI.borrarTodo()
            res.status(204).send()
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    router.put('/:id', async (req, res) => {
        const empleadoParaReemplazar = req.body

        try {
            const empleadoReemplazado = await empleadosAPI.reemplazar(req.params.id, empleadoParaReemplazar)
            res.json(empleadoReemplazado)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

    return router
}
export { getEmpleadosRouter }
