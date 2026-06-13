// Código de Angel C.
import MedicosObrasSocialesDB from '../db/medicos_obras_sociales.db.js';

class MedicosObrasSocialesService {
    buscarMOSPorId = async (id_MOS) => {
        return await MedicosObrasSocialesDB.buscarMOSPorId(id_MOS);
    };

    crearMOS = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.crearMOS(idMedico, idObraSocial);
    };

    actualizarMOS = async (id_MOS, idObraSocial, activo) => {
        return await MedicosObrasSocialesDB.actualizarMOS(id_MOS, idObraSocial, activo);
    };

    borrarMOS = async (id_MOS) => {
        return await MedicosObrasSocialesDB.borrarMOS(id_MOS);
    };
    actualizarMOS = async (id_MOS, idObraSocial, activo) => {
        return await MedicosObrasSocialesDB.actualizarMOS(id_MOS, idObraSocial, activo);
    }
}

export default new MedicosObrasSocialesService();