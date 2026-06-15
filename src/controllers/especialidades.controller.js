// Código de Angel C.
import EspecialidadesService from '../services/especialidades.service.js';

export default class EspecialidadesController {
    constructor() {
        this.service = new EspecialidadesService();
    }

    // Browse
    buscarTodas = async (req, res) => {
        const data = await this.service.buscarTodas();
        res.status(200).json(data);
    };

    // Obtener por ID:
    buscarPorId = async (req, res) => {
        const { id } = req.params;
        const especialidad = await this.service.buscarPorId(id);
        res.status(200).json(especialidad);
    };

    // Agregar
  crear = async (req, res) => {
        const nuevaEspecialidad = await this.service.crear(req.body);
        res.status(201).json({ estado: true, mensaje: 'Especialidad creada', datos: nuevaEspecialidad });
    };

    // Editar
  actualizar = async (req, res) => {
        const { id } = req.params;
        await this.service.actualizar(id, req.body);
        res.status(200).json({ message: 'Especialidad actualizada correctamente' });
    };

    // Delete
    borrar = async (req, res) => {
        const { id } = req.params;
        await this.service.borrar(id);
        res.status(200).json({ message: 'Especialidad eliminada correctamente (Soft Delete)' });
    };
}