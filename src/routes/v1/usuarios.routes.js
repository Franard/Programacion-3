import { Router } from 'express';
import UsuariosController from '../../controllers/usuarios.controller.js';
import { validarUsuario } from '../../middlewares/usuarios.validator.js';
import umpload from "../../middlewares/umpload.js";

const router = Router();

// Rutas del BREAD para Usuarios
router.get('/', UsuariosController.obtenerUsuarios);
router.get('/:id', validarUsuario, UsuariosController.obtenerUsuarioPorId);  
router.put('/:id', validarUsuario, UsuariosController.actualizarUsuario); 
router.delete('/:id', validarUsuario, UsuariosController.borrarUsuario);   
router.post("/",umpload.single("foto"),UsuariosController.crearUsuario); 

export default router;