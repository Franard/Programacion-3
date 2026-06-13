// Código de Angel C.
import medicosOS from '../services/medicos_obras_sociales.service.js';
class MedicosObrasSocialesController {
    
    buscarMOS = async (req, res) => {
        try {
            const medicosOSList = await medicosOS.buscarMOS();
            res.json(medicosOSList);
        } catch (error) {
            res.status(500).json({ message: 'Error al buscar los medicos-obras sociales', error });
        }
    };
    buscarMOSPorId = async (req, res) => {
        const id_MOS = req.params.id;
        try {
            const medicoOS = await medicosOS.buscarMOSPorId(id_MOS);
            if (medicoOS) {
                res.json(medicoOS);
            } else {
                res.status(404).json({ message: 'Medico-Obra Social no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al buscar el medico-obra social', error });
        }
    };

    crearMOS = async (req, res) => {
        const { idMedico, idObraSocial } = req.body;
        try {
            const nuevoMOSId = await medicosOS.crearMOS(idMedico, idObraSocial);
            res.status(201).json({ message: 'Medico-Obra Social creado', id: nuevoMOSId });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el medico-obra social', error });
        }
    }   ;

    actualizarMOS = async (req, res) => {
        const id_MOS = req.params.id;
        const { idObraSocial, activo } = req.body;
        try {
            await medicosOS.actualizarMOS(id_MOS, idObraSocial, activo);
            res.json({ message: 'Medico-Obra Social actualizado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el medico-obra social', error });
        }
    };

    borrarMOS = async (req, res) => {
        const id_MOS = req.params.id;
        try {
            await medicosOS.borrarMOS(id_MOS);
            res.json({ message: 'Medico-Obra Social borrado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al borrar el medico-obra social', error });
        }
    }   ;
}

export default new MedicosObrasSocialesController();