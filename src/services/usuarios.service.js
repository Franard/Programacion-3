import UsuariosDB from '../db/usuarios.db.js';

class UsuariosService {
    obtenerTodos = async () => {
        return await UsuariosDB.obtenerTodosLosUsuarios();
    };
    obtenerUsuarioPorId = async (id) => {
            return await UsuariosDB.obtenerUsuarioPorId(id);
    };
    crearUsuario = async (usuario) => {
        return await UsuariosDB.crearUsuario(usuario);
    };
    actualizarUsuario = async (id, usuario) => {
            return await UsuariosDB.actualizarUsuario(id, usuario);
    };
    borrarUsuario = async (id) => {
            return await UsuariosDB.borrarUsuario(id);
    };
}

export default new UsuariosService();