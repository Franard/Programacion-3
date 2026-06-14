// Código de Angel C.
import MedicosObrasSocialesDB from '../db/medicos_obras_sociales.db.js';

class MedicosObrasSocialesService {
    buscarMOS = async () => {
        return await MedicosObrasSocialesDB.buscarMOS();
    };

    buscarMOSPorIds = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.buscarMOSPorIds(idMedico, idObraSocial);
    };

    crearMOS = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.crearMOS(idMedico, idObraSocial);
    };

    actualizarMOS = async (idMedico, idObraSocialVieja, idObraSocialNueva, activo) => {
        return await MedicosObrasSocialesDB.actualizarMOS(idMedico, idObraSocialVieja, idObraSocialNueva, activo);
    };

    borrarMOS = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.eliminarMOS(idMedico, idObraSocial);
    };
}

export default new MedicosObrasSocialesService();