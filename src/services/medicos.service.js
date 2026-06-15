
import MedicosDB from '../db/medicos.db.js';

class MedicosService {
    obtenerTodos = async () => {
        return await MedicosDB.obtenerTodos();
    };

    obtenerPorId = async (id) => {
        const medico = await MedicosDB.obtenerPorId(id);
        if (!medico) {
            const error = new Error('Médico no encontrado o inactivo');
            error.status = 404;
            throw error;
        }
        return medico;
    };

    crear = async (medicoData) => {
        const nuevoId = await MedicosDB.crear(medicoData);
        // Devuelve objeto completo
        return await MedicosDB.obtenerPorId(nuevoId);
    };

    actualizar = async (id, medicoData) => {
        // Chequeo de existencia
        const existe = await MedicosDB.obtenerPorId(id);
        if (!existe) {
            const error = new Error('Médico no encontrado para actualizar');
            error.status = 404;
            throw error;
        }
        await MedicosDB.actualizar(id, medicoData);
    };

    borrar = async (id) => {
        // Chequeo de existencia
        const existe = await MedicosDB.obtenerPorId(id);
        if (!existe) {
            const error = new Error('Médico no encontrado para borrar');
            error.status = 404;
            throw error;
        }
        await MedicosDB.borrar(id);
    };
}

export default new MedicosService();