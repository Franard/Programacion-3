import {router} from 'express';
import {validateMedicosObrasSociales} from '../../middlewares/medicos_obras_sociales.validator.js';
import MedicosObrasSocialesController from '../../controllers/medicos_obras_sociales.controller.js';

const medicosObrasSocialesController = new MedicosObrasSocialesController();
const medicosObrasSocialesRouter = router();

medicosObrasSocialesRouter.get('/:id', medicosObrasSocialesController.buscarMOSPorId);
medicosObrasSocialesRouter.post('/', validateMedicosObrasSociales, medicosObrasSocialesController.crearMOS);
medicosObrasSocialesRouter.put('/:id', validateMedicosObrasSociales, medicosObrasSocialesController.actualizarMOS);
medicosObrasSocialesRouter.delete('/:id', medicosObrasSocialesController.borrarMOS);

export default medicosObrasSocialesRouter;

