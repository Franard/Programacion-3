// Código de Angel C.
import obrasSocialesService from '../services/obras_sociales.service.js';
class ObrasSocialesController {
    buscarOS = async (req, res) => {
        try {
            const obrasSociales = await obrasSocialesService.buscarOS();
            res.json(obrasSociales);
        } catch (error) {
            throw error;
        }
    };
    buscarOSPorId = async (req, res) => {
        const id = req.params.id;
        try {
            const obraSocial = await obrasSocialesService.buscarOSPorId(id);
            if (obraSocial) {
                res.json(obraSocial);
            } else {
                res.status(404).json({ message: 'Obra social no encontrada' });
            }
        } catch (error) {
            throw error;
        }
    };
    crearOS = async (req, res) => {
        const { nombre, descripcion, porcentaje, es_particular, activo } = req.body;
        try {
            const nuevoOSId = await obrasSocialesService.crearOS(nombre, descripcion, porcentaje, es_particular, activo);
            res.status(201).json({ message: 'Obra social creada', id: nuevoOSId });
        } catch (error) {
            throw error;
        }
    };
    actualizarOS = async (req, res) => {
        const id = req.params.id;
        const { nombre, descripcion, porcentaje, es_particular, activo } = req.body;
        try {
            await obrasSocialesService.actualizarOS(id, nombre, descripcion, porcentaje, es_particular, activo);
            res.json({ message: 'Obra social actualizada' });
        } catch (error) {
            throw error;
        }
    };
    borrarOS = async (req, res) => {
        const id = req.params.id;
        try {
            await obrasSocialesService.borrarOS(id);
            res.json({ message: 'Obra social borrada' });
        } catch (error) {
            throw error;
        }
    };
}

export default new ObrasSocialesController();