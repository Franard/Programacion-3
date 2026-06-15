
import { pool } from './connection.js';
class TurnosDB {
    async buscarTurnos() {
        const [rows] = await pool.query(
            'SELECT * FROM turnos_reservas WHERE activo = 1'
        );
        return rows;
    }
    async buscarTurnoPorId(id) {
        const [rows] = await pool.query(
            'SELECT * FROM turnos_reservas WHERE id_turno_reserva = ? AND activo = 1',
            [id]
        );
        return rows[0];
    }
    async crearTurno(turno) {
        const { id_medico, id_paciente, id_obra_social, fecha_hora, valor_total } = turno;
        const [result] = await pool.query(
            'INSERT INTO turnos_reservas (id_medico, id_paciente, id_obra_social, fecha_hora, valor_total, atentido, activo) VALUES (?, ?, ?, ?, ?, 0, 1)',
            [id_medico, id_paciente, id_obra_social, fecha_hora, valor_total]
        );
        return result.insertId;
    }
    async actualizarTurno(idTurno, turno) {
        const { id_medico, id_paciente, id_obra_social, fecha_hora, valor_total, atendido } = turno;
        await pool.query(
            'UPDATE turnos_reservas SET id_medico = ?, id_paciente = ?, id_obra_social = ?, fecha_hora = ?, valor_total = ?, atentido = ? WHERE id_turno_reserva = ?',
            [id_medico, id_paciente, id_obra_social, fecha_hora, valor_total, atendido, idTurno]
        );
    }
    async atender(id) {
        await pool.query(
            'UPDATE turnos_reservas SET atentido = 1 WHERE id_turno_reserva = ?',
            [id]
        );
    }
    async borrarTurno(id) {
        await pool.query(
            'UPDATE turnos_reservas SET activo = 0 WHERE id_turno_reserva = ?',
            [id]
        );
    }
}

export default new TurnosDB();
