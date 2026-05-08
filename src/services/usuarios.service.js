import UsuariosDB from '../db/usuarios.db.js';

class UsuariosService {
    obtenerUsuarios = async () => {
        return await UsuariosDB.obtenerUsuarios();
    };

    crearUsuario = async (usuario) => {
        return await UsuariosDB.crearUsuario(usuario);
    };
}

export default new UsuariosService();