import UsuariosService from '../services/usuarios.service.js';

class UsuariosController {
    getUsuarios = async (req, res) => {
        const usuarios = await UsuariosService.obtenerUsuarios();
        res.status(200).json({ estado: true, datos: usuarios });
    };

    postUsuario = async (req, res) => {
        const nuevoUsuario = await UsuariosService.crearUsuario(req.body);
        res.status(201).json({
            estado: true,
            mensaje: 'Usuario creado con éxito',
            datos: nuevoUsuario 
        });
    };
}

export default new UsuariosController();