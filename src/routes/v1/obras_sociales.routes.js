import {router} from 'express';
import {validateObrasSociales} from '../../middlewares/obras_sociales.validator.js';
import ObrasSocialesController from '../../controllers/obras_sociales.controller.js';

const obrasSocialesController = new ObrasSocialesController();
const obrasSocialesRouter = router();

obrasSocialesRouter.get('/:id', obrasSocialesController.buscarOSPorId);
obrasSocialesRouter.post('/', validateObrasSociales, obrasSocialesController.crearOS);
obrasSocialesRouter.put('/:id', validateObrasSociales, obrasSocialesController.actualizarOS);
obrasSocialesRouter.delete('/:id', obrasSocialesController.borrarOS);

export default obrasSocialesRouter;