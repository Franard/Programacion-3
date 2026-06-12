import { pool } from './connection.js';

class PacientesDB {
    async buscarPacientes() {
        const [rows] = await pool.query(
            'SELECT * FROM pacientes WHERE idPaciente = Not NULL',
        );
        return rows;
    }
    async buscarPacientePorId(id) {
        const [rows] = await pool.query(
             'SELECT * FROM pacientes WHERE idPaciente = ?',
             [id]
        );
        return rows[0];
    }
    async crearPaciente(idUsuario, idObraSocial) {

        const conexion = await pool.getConnection();

        try {

            await conexion.beginTransaction();

            // Crear paciente
            const [result] = await conexion.query(
                `INSERT INTO pacientes 
                ( idUsuario, idObraSocial) 
                VALUES ( ?, ?)`,
                [idUsuario, idObraSocial]
            );


            // Cambiar rol del usuario a paciente
            await conexion.query(
                `UPDATE usuarios 
                SET rol = 2 
                WHERE id_usuario = ?`,
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
            'UPDATE pacientes SET idUsuario = ?, idObraSocial = ? WHERE id_paciente = ?',
            [idUsuario, idObraSocial, id_paciente]
        );
    }
    async borrarPaciente(id) {
        await pool.query(
            'UPDATE pacientes SET activo = 0 WHERE id_paciente = ?',
            [id]
        );
    }
}

export default new PacientesDB();