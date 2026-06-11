import { Router } from 'express';
import UsuariosController from '../../controllers/usuarios.controller.js';
import { validarUsuario } from '../../middlewares/usuarios.validator.js';

const router = Router();

// Rutas del BREAD para Usuarios
router.get('/', UsuariosController.obtenerUsuarios);
router.get('/:id', UsuariosController.obtenerUsuarioPorId);
router.post('/', validarUsuario, UsuariosController.crearUsuario);  
router.put('/:id', validarUsuario, UsuariosController.actualizarUsuario); 
router.delete('/:id', UsuariosController.borrarUsuario);           

export default router;