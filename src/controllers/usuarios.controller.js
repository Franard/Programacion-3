// Código de Angel C.
import UsuariosService from '../services/usuarios.service.js';

class UsuariosController {

    obtenerUsuarioPorId = async (req, res) => {
            const { id } = req.params;
            try {
                const usuario = await UsuariosService.obtenerUsuarioPorId(id);
                if (!usuario) {
                    return res.status(404).json({ estado: false, mensaje: 'Usuario no encontrado o inactivo' });
                }
                res.status(200).json({ estado: true, datos: usuario });
            } catch (error) {
                res.status(500).json({ estado: false, mensaje: 'Error al obtener el usuario', error: error.message });
            }
        };

    obtenerUsuarios = async (req, res) => {
        try {
            const usuarios = await UsuariosService.obtenerTodos();
            
            res.status(200).json({ estado: true, datos: usuarios });
        } catch (error) {
            console.log(error);
            res.status(500).json({ estado: false, mensaje: 'Error al obtener usuarios', error: error.message });
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
            console.log(error);
            res.status(500).json({ estado: false, mensaje: 'Error al crear usuario', error: error.message });
        }
    };
    actualizarUsuario = async (req, res) => {
            const { id } = req.params;
            const usuarioData = req.body;
            try {
                // Primero verificamos si existe
                const existe = await UsuariosService.obtenerUsuarioPorId(id);
                if (!existe) {
                    return res.status(404).json({ estado: false, mensaje: 'Usuario no encontrado para actualizar' });
                }

                await UsuariosService.actualizar(id, usuarioData);
                res.status(200).json({ estado: true, mensaje: 'Usuario actualizado con éxito' });
            } catch (error) {
                res.status(500).json({ estado: false, mensaje: 'Error al actualizar usuario', error: error.message });
            }
    };

    // DELETE 
    borrarUsuario = async (req, res) => {
        const { id } = req.params;
        try {
            const existe = await UsuariosService.obtenerUsuarioPorId(id);
            if (!existe) {
                return res.status(404).json({ estado: false, mensaje: 'Usuario no encontrado' });
            }

            await UsuariosService.borrar(id);
            res.status(200).json({ estado: true, mensaje: 'Usuario eliminado (borrado lógico) con éxito' });
        } catch (error) {
            res.status(500).json({ estado: false, mensaje: 'Error al borrar usuario', error: error.message });
        }
    };
}

export default new UsuariosController();