// Código de Angel C.
import UsuariosDB from '../db/usuarios.db.js';
import bcrypt from 'bcrypt';

class UsuariosService {
    obtenerTodos = async () => {
        return await UsuariosDB.obtenerTodosLosUsuarios();
    };
    obtenerUsuarioPorId = async (id) => {
            return await UsuariosDB.obtenerUsuarioPorId(id);
    };
    crearUsuario = async (usuario) => {
        if (usuario.contrasenia) {
            usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, 10);
        }
        const insertId = await UsuariosDB.crearUsuario(usuario);
        return await UsuariosDB.obtenerUsuarioPorId(insertId);
    };
    actualizarUsuario = async (id, usuario) => {
            return await UsuariosDB.actualizarUsuario(id, usuario);
    };
    borrarUsuario = async (id) => {
            return await UsuariosDB.borrarUsuario(id);
    };
}

export default new UsuariosService();