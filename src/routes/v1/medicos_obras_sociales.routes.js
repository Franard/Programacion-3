import {Router} from 'express';
import {validarMedicosObrasSociales} from '../../middlewares/medicos_obras_sociales.validator.js';
import medicosObrasSocialesController from '../../controllers/medicos_obras_sociales.controller.js';


const medicosObrasSocialesRouter = Router();

medicosObrasSocialesRouter.get('/', medicosObrasSocialesController.buscarMOS);
medicosObrasSocialesRouter.get('/:id', medicosObrasSocialesController.buscarMOSPorId);
medicosObrasSocialesRouter.post('/', validarMedicosObrasSociales, medicosObrasSocialesController.crearMOS);
medicosObrasSocialesRouter.put('/:id', validarMedicosObrasSociales, medicosObrasSocialesController.actualizarMOS);
medicosObrasSocialesRouter.delete('/:id', medicosObrasSocialesController.borrarMOS);

export default medicosObrasSocialesRouter;

