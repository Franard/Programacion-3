import { Router } from 'express';
import UsuariosController from '../../controllers/usuarios.controller.js';
import { validarUsuario } from '../../middlewares/usuarios.validator.js';

const router = Router();

router.get('/', UsuariosController.getUsuarios);
router.post('/', validarUsuario, UsuariosController.postUsuario); 

export default router;