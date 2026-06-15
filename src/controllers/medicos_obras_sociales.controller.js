
import medicosOS from '../services/medicos_obras_sociales.service.js';
class MedicosObrasSocialesController {
    
    buscarMOS = async (req, res) => {
        try {
            const medicosOSList = await medicosOS.buscarMOS();
            res.json(medicosOSList);
        } catch (error) {
            throw error;
        }
    };
    
    buscarMOSPorIds = async (req, res) => {
        const { idMedico, idObraSocial } = req.params;
        try {
            const medicoOS = await medicosOS.buscarMOSPorIds(idMedico, idObraSocial);
            if (medicoOS) {
                res.json(medicoOS);
            } else {
                res.status(404).json({ message: 'Medico-Obra Social no encontrado' });
            }
        } catch (error) {
            throw error;
        }
    };

    crearMOS = async (req, res) => {
        const { idMedico, idObraSocial } = req.body;
        try {
            await medicosOS.crearMOS(idMedico, idObraSocial);
            res.status(201).json({ message: 'Medico-Obra Social creado' });
        } catch (error) {
            throw error;
        }
    };

    actualizarMOS = async (req, res) => {
        const { idMedico, idObraSocialVieja } = req.params;
        const { idObraSocial, activo } = req.body;
        try {
            await medicosOS.actualizarMOS(idMedico, idObraSocialVieja, idObraSocial, activo);
            res.json({ message: 'Medico-Obra Social actualizado' });
        } catch (error) {
            throw error;
        }
    };

    borrarMOS = async (req, res) => {
        const { idMedico, idObraSocial } = req.params;
        try {
            await medicosOS.borrarMOS(idMedico, idObraSocial);
            res.json({ message: 'Medico-Obra Social borrado' });
        } catch (error) {
            throw error;
        }
    };
}

export default new MedicosObrasSocialesController();