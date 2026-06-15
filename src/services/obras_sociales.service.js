// Código de Angel C.
import obrasSocialesDB from '../db/obras_sociales.db.js';

class ObrasSocialesService {
    buscarOS = async () => {
        return await obrasSocialesDB.buscarOSActivas();
    };
    buscarOSPorId = async (id) => {
        return await obrasSocialesDB.buscarOSPorId(id);
    };
    crearOS = async (nombre, descripcion, porcentaje, es_particular,activo) => {
        const insertId = await obrasSocialesDB.crearOS(nombre, descripcion, porcentaje, es_particular, activo);
        return await obrasSocialesDB.buscarOSPorId(insertId);
    };
    actualizarOS = async (id, nombre, descripcion, porcentaje, es_particular, activo) => {
        return await obrasSocialesDB.actualizarOS(id, nombre, descripcion, porcentaje, es_particular, activo);
    };
    borrarOS = async (id) => {
        return await obrasSocialesDB.borrarOS(id);
    };
}

export default new ObrasSocialesService();