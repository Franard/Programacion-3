
import { pool } from './connection.js';

class UsuariosDB {
    obtenerTodosLosUsuarios = async () => {
        const [resultado] = await pool.query(
            `SELECT id_usuario, documento, nombres, apellido, email, foto_path, rol, activo
             FROM usuarios
             WHERE activo = 1`
        );
        return resultado;
    };

    obtenerUsuarioPorId = async (id) => {
        const [resultado] = await pool.query(
            `SELECT id_usuario, documento, nombres, apellido, email, foto_path, rol, activo
             FROM usuarios
             WHERE id_usuario = ? AND activo = 1`,
            [id]
        );
        return resultado[0];
    };

    buscarPorEmail = async (email) => {
        const [resultado] = await pool.query(
            `SELECT * FROM usuarios WHERE email = ? AND activo = 1`,
            [email]
        );
        return resultado[0];
    };

    crearUsuario = async (usuario) => {
        const params = [usuario.documento, usuario.apellido, usuario.nombres, usuario.email, usuario.contrasenia, usuario.foto_path, usuario.rol, usuario.activo]
            .map(v => v === undefined ? null : v);
        const [resultado] = await pool.query(
            'INSERT INTO usuarios (documento, apellido, nombres, email, contrasenia, foto_path, rol, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            params
        );
        return resultado.insertId;
    };

    actualizarUsuario = async (id, usuario) => {
        const params = [usuario.documento, usuario.apellido, usuario.nombres, usuario.email, usuario.contrasenia, usuario.foto_path, usuario.rol, usuario.activo, id]
            .map(v => v === undefined ? null : v);
        const [resultado] = await pool.query(
            'UPDATE usuarios SET documento = ?, apellido = ?, nombres = ?, email = ?, contrasenia = ?, foto_path = ?, rol = ?, activo = ? WHERE id_usuario = ?',
            params
        );
        return resultado.affectedRows;
    };

    borrarUsuario = async (id) => {
        const [resultado] = await pool.query(
            'UPDATE usuarios SET activo = 0 WHERE id_usuario = ?',
            [id]
        );
        return resultado.affectedRows;
    };
}

export default new UsuariosDB();