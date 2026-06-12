import obrasSocialesService from '../services/obras_sociales.service.js';
class ObrasSocialesController {
    buscarOS = async (req, res) => {
        try {
            const obrasSociales = await obrasSocialesService.buscarOS();
            res.json(obrasSociales);
        } catch (error) {
            res.status(500).json({ message: 'Error al buscar las obras sociales', error });
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
            res.status(500).json({ message: 'Error al buscar la obra social', error });
        }
    };
    crearOS = async (req, res) => {
        const { nombre, descripcion, porcentaje, es_particular, activo } = req.body;
        try {
            const nuevoOSId = await obrasSocialesService.crearOS(nombre, descripcion, porcentaje, es_particular, activo);
            res.status(201).json({ message: 'Obra social creada', id: nuevoOSId });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la obra social', error });
        }
    };
    actualizarOS = async (req, res) => {
        const id = req.params.id;
        const { nombre, descripcion, porcentaje, es_particular, activo } = req.body;
        try {
            await obrasSocialesService.actualizarOS(id, nombre, descripcion, porcentaje, es_particular, activo);
            res.json({ message: 'Obra social actualizada' });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la obra social', error });
        }
    };
    borrarOS = async (req, res) => {
        const id = req.params.id;
        try {
            await obrasSocialesService.borrarOS(id);
            res.json({ message: 'Obra social borrada' });
        } catch (error) {
            res.status(500).json({ message: 'Error al borrar la obra social', error });
        }
    };
}