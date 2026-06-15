
import MedicosService from '../services/medicos.service.js';

class MedicosController {
    // GET
    obtenerTodos = async (req, res) => {
        const medicos = await MedicosService.obtenerTodos();
        res.status(200).json(medicos);
    };

    // GET
    obtenerPorId = async (req, res) => {
        const { id } = req.params;
        const medico = await MedicosService.obtenerPorId(id);
        res.status(200).json(medico);
    };

    // POST 
    crear = async (req, res) => {
        const medicoData = req.body;
        const nuevoMedico = await MedicosService.crear(medicoData);
        res.status(201).json({ estado: true, mensaje: 'Médico creado con éxito', datos: nuevoMedico });
    };

    // PUT 
    actualizar = async (req, res) => {
        const { id } = req.params;
        const medicoData = req.body;
        
        await MedicosService.actualizar(id, medicoData);
        res.status(200).json({ message: 'Médico actualizado con éxito' });
    };

    // DELETE 
    borrar = async (req, res) => {
        const { id } = req.params;
        
        await MedicosService.borrar(id);
        res.status(200).json({ message: 'Médico eliminado (borrado lógico) con éxito' });
    };
}

export default new MedicosController();