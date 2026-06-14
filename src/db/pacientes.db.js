// Código de Angel C.
import { pool } from './connection.js';

class PacientesDB {
    async buscarPacientes() {
        const [rows] = await pool.query(
            'SELECT * FROM pacientes'
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
        } catch(error){
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
        // La tabla pacientes no tiene columna activo, por lo que borramos el registro físicamente
        // O alternativamente solo actualizamos el usuario
        await pool.query(
            'DELETE FROM pacientes WHERE id_paciente = ?',
            [id]
        );
    }
}

export default new PacientesDB();