import UsuariosDB from '../db/usuarios.db.js';

class UsuariosService {
    obtenerUsuarios = async () => {
        return await UsuariosDB.obtenerUsuarios();
    };

    obtenerPorId = async (id) => {
        const usuario = await UsuariosDB.obtenerPorId(id);
        if (!usuario) {
            const error = new Error('Usuario no encontrado');
            error.status = 404;
            throw error;
        }
        return usuario;
    };

    crearUsuario = async (usuario) => {
        const insertId = await UsuariosDB.crearUsuario(usuario);
        // Retornar el objeto completo (Regla 4)
        return await UsuariosDB.obtenerPorId(insertId);
    };
}

export default new UsuariosService();