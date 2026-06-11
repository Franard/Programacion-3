import { pool } from './connection.js';

class UsuariosDB {
    // Browse join con usuarios y especialidades
    obtenerTodosLosUsuarios = async () => {
        const [resultado] = await pool.query(
            `SELECT u.id, u.documento,u.nombre, u.apellido, u.documento, u.email, u.contraseña, u.foto_path, u.rol, u.activo
             FROM usuarios m
             INNER JOIN usuarios u ON m.id = u.id
             WHERE u.activo = 1`
        );
        return resultado;
    };

    //  Read 
    obtenerUsuarioPorId = async (id) => {
        const [resultado] = await pool.query(
            `SELECT m.*, u.nombres, u.apellido, u.documento 
             FROM usuarios m
             INNER JOIN usuarios u ON u.id = u.id
             WHERE u.id = ? AND u.activo = 1`,
            [id]
        );
        return resultado[0];
    };

    //Add
    crearUsuario = async (usuario) => {
        const [resultado] = await pool.query(
            'INSERT INTO usuarios (id_usuario, documento, apellido, nombres, email, contraseña, foto_path, rol, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [usuario.id_usuario, usuario.documento, usuario.apellido, usuario.nombres, usuario.email, usuario.contraseña, usuario.foto_path, usuario.rol, usuario.activo]
        );
        return resultado.insertId;
    };

    // Edit
    actualizarUsuario = async (id, usuario) => {
        const [resultado] = await pool.query(
            'UPDATE usuarios SET id_usuario = ?, documento = ?, apellido = ?, nombres = ?, email = ?, contraseña = ?, foto_path = ?, rol = ?, activo = ? WHERE id_usuario = ?',
            [usuario.id_usuario, usuario.documento, usuario.apellido, usuario.nombres, usuario.email, usuario.contraseña, usuario.foto_path, usuario.rol, usuario.activo, id]
        );
        return resultado.affectedRows;
    };

    //Delete, descantivando usuario
    borrarUsuario = async (id) => {
        const [usuario] = await pool.query('SELECT id_usuario FROM medicos WHERE id_usuarios = ?', [id]);
        
        if (usuario.length === 0) return 0; 
       
        const [resultado] = await pool.query(
            'UPDATE usuarios SET activo = 0 WHERE id_usuario = ?',
            [usuario[0].id_usuario]
        );
        return resultado.affectedRows;
    };
}

export default new UsuariosDB();