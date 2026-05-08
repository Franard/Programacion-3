import UsuariosService from '../services/usuarios.service.js';

class UsuariosController {
    getUsuarios = async (req, res) => {
        try {
            const usuarios = await UsuariosService.obtenerUsuarios();
            
            res.status(200).json({ estado: true, datos: usuarios });
        } catch (error) {
            console.log(error);
            res.status(500).json({ estado: false, error: error.message });
        }
    };

    postUsuario = async (req, res) => {
        try {
            const nuevoId = await UsuariosService.crearUsuario(req.body);

            res.status(201).json({
                estado: true,
                mensaje: 'Usuario creado con éxito',
                id: nuevoId 
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ estado: false, error: error.message });
        }
    };
}

export default new UsuariosController();