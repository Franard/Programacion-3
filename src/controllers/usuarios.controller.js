
import UsuariosService from '../services/usuarios.service.js';

class UsuariosController {

    obtenerUsuarioPorId = async (req, res) => {
            const { id } = req.params;
            try {
                const usuario = await UsuariosService.obtenerUsuarioPorId(id);
                if (!usuario) {
                    return res.status(404).json({ message: 'Usuario no encontrado o inactivo' });
                }
                res.status(200).json(usuario);
            } catch (error) {
            throw error;
            }
        };

    obtenerUsuarios = async (req, res) => {
        try {
            const usuarios = await UsuariosService.obtenerTodos();
            
            res.status(200).json(usuarios);
        } catch (error) {

            throw error;
        }
    };

    crearUsuario = async (req, res) => {
        try {
            const nuevoId = await UsuariosService.crearUsuario(req.body);

            res.status(201).json({
                estado: true,
                mensaje: 'Usuario creado con éxito',
                id: nuevoId 
            });
        } catch (error) {

            throw error;
        }
    };
    actualizarUsuario = async (req, res) => {
            const { id } = req.params;
            const usuarioData = req.body;
            try {
                // Primero verificamos si existe
                const existe = await UsuariosService.obtenerUsuarioPorId(id);
                if (!existe) {
                    return res.status(404).json({ message: 'Usuario no encontrado para actualizar' });
                }

                await UsuariosService.actualizar(id, usuarioData);
                res.status(200).json({ message: 'Usuario actualizado con éxito' });
            } catch (error) {
            throw error;
            }
    };

    // DELETE 
    borrarUsuario = async (req, res) => {
        const { id } = req.params;
        try {
            const existe = await UsuariosService.obtenerUsuarioPorId(id);
            if (!existe) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            await UsuariosService.borrar(id);
            res.status(200).json({ message: 'Usuario eliminado (borrado lógico) con éxito' });
        } catch (error) {
            throw error;
        }
    };
}

export default new UsuariosController();