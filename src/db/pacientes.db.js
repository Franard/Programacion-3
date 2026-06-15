// Código de Angel C.
import { pool } from './connection.js';

class PacientesDB {
    async buscarPacientes() {
        const [rows] = await pool.query(
            `SELECT p.*, u.nombres, u.apellido, u.documento
             FROM pacientes p 
             INNER JOIN usuarios u ON p.id_usuario = u.id_usuario 
             WHERE u.activo = 1`
        );
        return rows;
    }

    async buscarPacientePorId(id) {
        const [rows] = await pool.query(
            `SELECT p.*, u.nombres, u.apellido, u.documento
             FROM pacientes p 
             INNER JOIN usuarios u ON p.id_usuario = u.id_usuario 
             WHERE p.id_paciente = ? AND u.activo = 1`,
            [id]
        );
        return rows[0];
    }

    async crearPaciente(idUsuario, idObraSocial) {
        const conexion = await pool.getConnection();
        try {
            await conexion.beginTransaction();

            const [result] = await conexion.query(
                `INSERT INTO pacientes (id_usuario, id_obra_social) VALUES (?, ?)`,
                [idUsuario, idObraSocial]
            );

            await conexion.query(
                `UPDATE usuarios SET rol = 2 WHERE id_usuario = ?`,
                [idUsuario]
            );

            await conexion.commit();
            return result.insertId;
        } catch (error) {
            await conexion.rollback();
            throw error;
        } finally {
            conexion.release();
        }
    }

    async actualizarPaciente(id_paciente, idUsuario, idObraSocial) {
        await pool.query(
            'UPDATE pacientes SET id_usuario = ?, id_obra_social = ? WHERE id_paciente = ?',
            [idUsuario, idObraSocial, id_paciente]
        );
    }

    async borrarPaciente(id) {
        const paciente = await this.buscarPacientePorId(id);
        if (paciente) {
            await pool.query(
                'UPDATE usuarios SET activo = 0 WHERE id_usuario = ?',
                [paciente.id_usuario]
            );
        }
    }
}

export default new PacientesDB();