import obrasSocialesDB from '../db/obras_sociales.db.js';

class ObrasSocialesService {
    buscarOS = async () => {
        return await ObrasSocialesDB.buscarOSActivas();
    };
    buscarOSPorId = async (id) => {
        return await ObrasSocialesDB.buscarOSPorId(id);
    };
    crearOS = async (nombre, descripcion, porcentaje, es_particular,activo) => {
        return await ObrasSocialesDB.crearOS(nombre, descripcion, porcentaje, es_particular, activo);
    };
    actualizarOS = async (id, nombre, descripcion, porcentaje, es_particular, activo) => {
        return await ObrasSocialesDB.actualizarOS(id, nombre, descripcion, porcentaje, es_particular, activo);
    };
    borrarOS = async (id) => {
        return await ObrasSocialesDB.borrarOS(id);
    };
}

export default new ObrasSocialesService();