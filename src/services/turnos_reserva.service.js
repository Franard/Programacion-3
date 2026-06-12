import turnosDB from '../db/turnos_reserva.db.js';
class TurnosService {
    async obtenerTurnos() {
        return await turnosDB.buscarTurnos();
    } 
    async obtenerTurnoPorId(id) {
        return await turnosDB.buscarTurnoPorId(id);
    }
    async crearTurno(idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido) {
        return await turnosDB.crearTurno(idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido);
    }
    async actualizarTurno(id, fecha_hora, valor_total, atendido, activo) {
        await turnosDB.actualizarTurno(id, fecha_hora, valor_total, atendido, activo);
    }
    async atenderTurno(id) {
        await turnosDB.atender(id);
    }
    async borrarTurno(id) {
        await turnosDB.borrarTurno(id);
    }
}

export const turnosService = new TurnosService();