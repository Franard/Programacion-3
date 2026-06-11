import { pool } from './connection.js';

class PacientesDB {
    async buscarPacientes() {
        const [rows] = await pool.query(
            'SELECT * FROM pacientes WHERE activo = 1'
        );
        return rows;
    }
    async buscarPorId(id) {
        const [rows] = await pool.query(
             'SELECT * FROM pacientes WHERE id_paciente = ? AND activo = 1',
             [id]
        );
        return rows[0];
    }
    async crear(nombre, idPaciente) {
        const [result] = await pool.query(
            'INSERT INTO pacientes (nombre, idPaciente, idObraSocial) VALUES (?, ?, 1)',
            [nombre, dni]
        );
        return result.insertId;
    }
    async actualizar(id, nombre, dni) {
        await pool.query(
            'UPDATE pacientes SET nombre = ?, dni = ? WHERE id_paciente = ?',
            [nombre, dni, id]
        );
    }
    async borrar(id) {
        await pool.query(
            'UPDATE pacientes SET activo = 0 WHERE id_paciente = ?',
            [id]
        );
    }
}

export const pacientesDB = new PacientesDB();