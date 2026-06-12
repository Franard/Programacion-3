import {router} from 'express';
import {validatePacientes} from '../../middlewares/pacientes.validator.js';
import PacientesController from '../../controllers/pacientes.controller.js';

const pacientesRouter = router();

const pacientesController = new PacientesController();

pacientesRouter.get('/:id', pacientesController.obtenerPacientePorId);
pacientesRouter.post('/', validatePacientes, pacientesController.crearPaciente);
pacientesRouter.put('/:id', validatePacientes, pacientesController.actualizarPaciente);
pacientesRouter.delete('/:id', pacientesController.eliminarPaciente);

export default pacientesRouter;