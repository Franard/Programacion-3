import { Router } from 'express';
import EspecialidadesController from '../../controllers/especialidades.controller.js';
import { validarEspecialidad } from '../../middlewares/especialidades.validator.js';

const router = Router();
const controller = new EspecialidadesController();

router.get('/', controller.buscarTodas);
router.get('/:id', controller.buscarPorId);
router.post('/', validarEspecialidad, controller.crear);
router.put('/:id', validarEspecialidad, controller.actualizar);
router.delete('/:id', controller.borrar); // Soft Delete

export default router;