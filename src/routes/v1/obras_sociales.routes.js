import {Router} from 'express';
import {validarObrasSociales} from '../../middlewares/obras_sociales.validator.js';
import obrasSocialesController from '../../controllers/obras_sociales.controller.js';


const obrasSocialesRouter = Router();

obrasSocialesRouter.get('/', obrasSocialesController.buscarOS);
obrasSocialesRouter.get('/:id', obrasSocialesController.buscarOSPorId);
obrasSocialesRouter.post('/', validarObrasSociales, obrasSocialesController.crearOS);
obrasSocialesRouter.put('/:id', validarObrasSociales, obrasSocialesController.actualizarOS);
obrasSocialesRouter.delete('/:id', obrasSocialesController.borrarOS);

export default obrasSocialesRouter;