import { pool } from './connection.js';

class UsuariosDB {
    obtenerUsuarios = async () => {
        const [rows] = await pool.query(
            'SELECT * FROM usuarios WHERE activo = 1' 
        );
        return rows;
    };

    obtenerPorId = async (id) => {
        const [rows] = await pool.query(
            'SELECT * FROM usuarios WHERE id_usuario = ? AND activo = 1',
            [id]
        );
        return rows[0];
    };

    crearUsuario = async (usuario) => {
        const {
            documento,
            nombres, 
            apellido,
            email,
            contrasenia, 
            foto_path,
            rol,
            activo
        } = usuario;

        const [result] = await pool.query(
            `
            INSERT INTO usuarios 
            (
                documento,
                nombres,
                apellido,
                email,
                contrasenia,
                foto_path,
                rol,
                activo
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                documento,
                nombres,
                apellido,
                email,
                contrasenia,
                foto_path || '',
                rol || 2, // Por defecto rol paciente
                activo || 1 // activo
            ]
        );

        return result.insertId;
    };
}

export default new UsuariosDB();