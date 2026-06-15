// Código de Angel C.
import PacientesDB from '../db/pacientes.db.js';

class PacientesService {
    buscarPacientes = async () => {
        return await PacientesDB.buscarPacientes();
    };
    buscarPacientePorId = async (idPaciente) => {
        return await PacientesDB.buscarPacientePorId(idPaciente);
    };
    crearPaciente = async (idUsuario, idObraSocial) => {
        const insertId = await PacientesDB.crearPaciente(idUsuario, idObraSocial);
        return await PacientesDB.buscarPacientePorId(insertId);
    };
    actualizarPaciente = async (idPaciente, idUsuario, idObraSocial) => {
        return await PacientesDB.actualizarPaciente(idPaciente, idUsuario, idObraSocial);
    };
    borrarPaciente = async (idPaciente) => {
        return await PacientesDB.borrarPaciente(idPaciente);
    };
}

export default new PacientesService();