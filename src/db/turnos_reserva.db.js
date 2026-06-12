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
    async actualizarTurno(idTurno, idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido) {
        await pool.query(
            'UPDATE turnos SET id_Medico = ?, id_Paciente = ?, idObrasocial = ?, fecha_hora = ?, valor_total = ?, atendido = ? WHERE id_turno = ?',
            [idTurno, idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido]
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

export default new TurnosDB();
