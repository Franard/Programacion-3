import {Router} from 'express';
import {validarPacientes} from '../../middlewares/pacientes.validator.js';
import PacientesController from '../../controllers/pacientes.controller.js';

const router = Router();

router.get('/',PacientesController.buscarPacientes);
router.get('/:id',PacientesController.buscarPacientePorId);
router.post('/',validarPacientes,PacientesController.crearPaciente);
router.put('/:id',validarPacientes,PacientesController.actualizarPaciente);
router.delete('/:id',PacientesController.borrarPaciente);

export default router;