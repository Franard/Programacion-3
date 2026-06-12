import pacientesDB from '../db/pacientes.db.js';

class PacientesService {
    buscarPacientes = async () => {
        return await pacientesDB.buscarPacientes();
    };
    buscarPacientePorId = async (idPaciente) => {
        return await pacientesDB.buscarPacientePorId(idPaciente);
    };
    crearPaciente = async (idUsuario, idObraSocial) => {
        return await pacientesDB.crearPaciente(idUsuario, idObraSocial);
    };
    actualizarPaciente = async (idPaciente, idUsuario, idObraSocial) => {
        return await pacientesDB.actualizarPaciente(idPaciente, idUsuario, idObraSocial);
    };
    borrarPaciente = async (idPaciente) => {
        return await pacientesDB.borrarPaciente(idPaciente);
    };
}

export default new PacientesService();