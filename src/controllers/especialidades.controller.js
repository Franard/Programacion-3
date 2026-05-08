import EspecialidadesService from '../services/especialidades.service.js';

export default class EspecialidadesController {
    constructor() {
        this.service = new EspecialidadesService();
    }

    // Browse
    buscarTodas = async (req, res) => {
        try {
            const data = await this.service.buscarTodas();
            res.status(200).json({ estado: true, datos: data });
        } catch (error) {
            console.error(error);
            res.status(500).json({ estado: false, mensaje: 'Error interno del servidor' });
        }
    };

    // Read:
    buscarPorId = async (req, res) => {
        try {
            const { id } = req.params;
            const especialidad = await this.service.buscarPorId(id);
            
            if (!especialidad) {
                // 404 
                return res.status(404).json({ estado: false, mensaje: 'Especialidad no encontrada' });
            }
            res.status(200).json({ estado: true, datos: especialidad });
        } catch (error) {
            console.error(error);
            res.status(500).json({ estado: false, mensaje: 'Error interno del servidor' });
        }
    };

    // Add
    crear = async (req, res) => {
        try {
            const idGenerado = await this.service.crear(req.body);
            res.status(201).json({ estado: true, mensaje: 'Especialidad creada', id: idGenerado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ estado: false, mensaje: 'Error interno del servidor' });
        }
    };

    // Edit
    actualizar = async (req, res) => {
        try {
            const { id } = req.params;
            
            const existe = await this.service.buscarPorId(id);
            if (!existe) {
                return res.status(404).json({ estado: false, mensaje: 'Especialidad no encontrada' });
            }

            await this.service.actualizar(id, req.body);
            res.status(200).json({ estado: true, mensaje: 'Especialidad actualizada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ estado: false, mensaje: 'Error interno del servidor' });
        }
    };

    // Delete
    borrar = async (req, res) => {
        try {
            const { id } = req.params;
            
            const existe = await this.service.buscarPorId(id);
            if (!existe) {
                return res.status(404).json({ estado: false, mensaje: 'Especialidad no encontrada' });
            }

            await this.service.borrar(id);
            res.status(200).json({ estado: true, mensaje: 'Especialidad eliminada correctamente (Soft Delete)' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ estado: false, mensaje: 'Error interno del servidor' });
        }
    };
}