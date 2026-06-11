import { pool } from './connection.js';
class TurnosDB {
    async buscarTurnos() {
        const [rows] = await pool.query(
            'SELECT * FROM turnos WHERE activo = 1'
        );
        return rows;
    }
    async buscarTurnoPorId(id) {
        const [rows] = await pool.query(
            'SELECT * FROM turnos WHERE id_turno = ? AND activo = 1',
            [id]
        );
        return rows[0];
    }
    async crearTurno(idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido) {
        const [result] = await pool.query(
            'INSERT INTO turnos (id_Medico, id_Paciente, idObrasocial, fecha_hora, valor_total, atendido, activo) VALUES (?, ?, ?, ?, ?, 0, 1)',
            [idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido]
        );
        return result.insertId;
    }
    async actualizarTurno(id, fecha_hora, valor_total, atendido, activo) {
        await pool.query(
            'UPDATE turnos SET fecha_hora = ?, valor_total = ?, atendido = ?, activo = ? WHERE id_turno = ?',
            [fecha_hora, valor_total, atendido, activo, id]
        );
    }
    async atender(id) {
        await pool.query(
            'UPDATE turnos SET atendido = 1 WHERE id_turno = ?',
            [id]
        );
    }
    async borrarTurno(id) {
        await pool.query(
            'UPDATE turnos SET activo = 0 WHERE id_turno = ?',
            [id]
        );
    }
}

export const turnosDB = new TurnosDB();
