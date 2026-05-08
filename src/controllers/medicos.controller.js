import MedicosService from '../services/medicos.service.js';

class MedicosController {
    // GET
    obtenerTodos = async (req, res) => {
        try {
            const medicos = await MedicosService.obtenerTodos();
            res.status(200).json({ estado: true, datos: medicos });
        } catch (error) {
            res.status(500).json({ estado: false, mensaje: 'Error al obtener médicos', error: error.message });
        }
    };

    // GET
    obtenerPorId = async (req, res) => {
        const { id } = req.params;
        try {
            const medico = await MedicosService.obtenerPorId(id);
            if (!medico) {
                return res.status(404).json({ estado: false, mensaje: 'Médico no encontrado o inactivo' });
            }
            res.status(200).json({ estado: true, datos: medico });
        } catch (error) {
            res.status(500).json({ estado: false, mensaje: 'Error al obtener el médico', error: error.message });
        }
    };

    // POST 
    crear = async (req, res) => {
        const medicoData = req.body;
        try {
            const nuevoId = await MedicosService.crear(medicoData);
            res.status(201).json({ estado: true, mensaje: 'Médico creado con éxito', id: nuevoId });
        } catch (error) {
            res.status(500).json({ estado: false, mensaje: 'Error al crear médico', error: error.message });
        }
    };

    // PUT 
    actualizar = async (req, res) => {
        const { id } = req.params;
        const medicoData = req.body;
        try {
            // Primero verificamos si existe
            const existe = await MedicosService.obtenerPorId(id);
            if (!existe) {
                return res.status(404).json({ estado: false, mensaje: 'Médico no encontrado para actualizar' });
            }

            await MedicosService.actualizar(id, medicoData);
            res.status(200).json({ estado: true, mensaje: 'Médico actualizado con éxito' });
        } catch (error) {
            res.status(500).json({ estado: false, mensaje: 'Error al actualizar médico', error: error.message });
        }
    };

    // DELETE 
    borrar = async (req, res) => {
        const { id } = req.params;
        try {
            const existe = await MedicosService.obtenerPorId(id);
            if (!existe) {
                return res.status(404).json({ estado: false, mensaje: 'Médico no encontrado' });
            }

            await MedicosService.borrar(id);
            res.status(200).json({ estado: true, mensaje: 'Médico eliminado (borrado lógico) con éxito' });
        } catch (error) {
            res.status(500).json({ estado: false, mensaje: 'Error al borrar médico', error: error.message });
        }
    };
}

export default new MedicosController();