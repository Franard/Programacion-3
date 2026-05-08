import { Router } from 'express';
import MedicosController from '../../controllers/medicos.controller.js';
import { validarMedico } from '../../middlewares/medicos.validator.js';

const router = Router();

// Rutas del BREAD para Médicos
router.get('/', MedicosController.obtenerTodos);           
router.get('/:id', MedicosController.obtenerPorId);        
router.post('/', validarMedico, MedicosController.crear);  
router.put('/:id', validarMedico, MedicosController.actualizar); 
router.delete('/:id', MedicosController.borrar);           

export default router;