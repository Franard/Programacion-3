import { pool } from './connection.js';

class PacientesDB {
    async buscarPacientes() {
        const [rows] = await pool.query(
            'SELECT * FROM pacientes WHERE id_paciente = Not NULL',
        );
        return rows;
    }
    async buscarPacientePorId(id) {
        const [rows] = await pool.query(
             'SELECT * FROM pacientes WHERE id_paciente = ?',
             [id]
        );
        return rows[0];
    }
    async crearPaciente(idPaciente, idUsuario, idObraSocial) {
        const [result] = await pool.query(
            'INSERT INTO pacientes (idPaciente, idUsuario ,idObraSocial) VALUES (?, ?, ?)',
            [idPaciente, idUsuario, idObraSocial]
        );
        return result.insertId;
    }
    async actualizarPaciente(id, nombre, dni) {
        await pool.query(
            'UPDATE pacientes SET nombre = ?, dni = ? WHERE id_paciente = ?',
            [nombre, dni, id]
        );
    }
    async borrarPaciente(id) {
        await pool.query(
            'UPDATE pacientes SET activo = 0 WHERE id_paciente = ?',
            [id]
        );
    }
}

export const pacientesDB = new PacientesDB();