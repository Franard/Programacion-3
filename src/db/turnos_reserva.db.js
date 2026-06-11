import { pool } from './connection.js';
class TurnosDB {
    async buscarPacientes() {
        const [rows] = await pool.query(
            'SELECT * FROM pacientes WHERE activo = 1'
        );
        return rows;
    }
    async buscarPorId(id) {
        const [rows] = await pool.query(
            'SELECT * FROM pacientes WHERE id = ? AND activo = 1',
            [id]
        );
        return rows[0];
    }
    async crear(idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido) {
        const [result] = await pool.query(
            'INSERT INTO pacientes (id_Medico, id_Paciente, idObrasocial, fecha_hora, valor_total, atendido, activo) VALUES (?, ?, ?, ?, ?, 0, 1)',
            [idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido]
        );
        return result.insertId;
    }
    async actualizar(id, fecha_hora, valor_total, atendido, activo) {
        await pool.query(
            'UPDATE pacientes SET fecha_hora = ?, valor_total = ?, atendido = ?, activo = ? WHERE id = ?',
            [fecha_hora, valor_total, atendido, activo, id]
        );
    }
    async atender(id) {
        await pool.query(
            'UPDATE pacientes SET atendido = 1 WHERE id = ?',
            [id]
        );
    }
    async borrar(id) {
        await pool.query(
            'UPDATE pacientes SET activo = 0 WHERE id = ?',
            [id]
        );
    }
}

export const turnosDB = new TurnosDB();
