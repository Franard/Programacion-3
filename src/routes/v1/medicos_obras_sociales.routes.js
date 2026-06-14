// Código de Angel C.
import {Router} from 'express';
import {validarMedicosObrasSociales} from '../../middlewares/medicos_obras_sociales.validator.js';
import medicosObrasSocialesController from '../../controllers/medicos_obras_sociales.controller.js';


const medicosObrasSocialesRouter = Router();

medicosObrasSocialesRouter.get('/', medicosObrasSocialesController.buscarMOS);
medicosObrasSocialesRouter.get('/:idMedico/:idObraSocial', medicosObrasSocialesController.buscarMOSPorIds);
medicosObrasSocialesRouter.post('/', validarMedicosObrasSociales, medicosObrasSocialesController.crearMOS);
medicosObrasSocialesRouter.put('/:idMedico/:idObraSocialVieja', validarMedicosObrasSociales, medicosObrasSocialesController.actualizarMOS);
medicosObrasSocialesRouter.delete('/:idMedico/:idObraSocial', medicosObrasSocialesController.borrarMOS);

export default medicosObrasSocialesRouter;

