import MedicosDB from '../db/medicos.db.js';

class MedicosService {
    obtenerTodos = async () => {
        return await MedicosDB.obtenerTodos();
    };

    obtenerPorId = async (id) => {
        return await MedicosDB.obtenerPorId(id);
    };

    crear = async (medico) => {
        return await MedicosDB.crear(medico);
    };

    actualizar = async (id, medico) => {
        return await MedicosDB.actualizar(id, medico);
    };

    borrar = async (id) => {
        return await MedicosDB.borrar(id);
    };
}

export default new MedicosService();