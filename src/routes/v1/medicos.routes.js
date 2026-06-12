import { Router } from 'express';
import MedicosController from '../../controllers/medicos.controller.js';
import { validarMedico } from '../../middlewares/medicos.validator.js';
import {verificarToken} from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';
import TurnosreservaController from '../../controllers/turnos_reserva.controller.js';

const router = Router();

// Rutas del BREAD para Médicos
router.get('/', MedicosController.obtenerTodos);           
router.get('/:id', MedicosController.obtenerPorId);        
router.post('/', validarMedico, MedicosController.crear);  
router.put('/:id', validarMedico, MedicosController.actualizar); 
router.delete('/:id', MedicosController.borrar);
router.get("/turnos",verificarToken,permitirRoles(1),TurnosreservaController.buscarTurnos);
router.put("/turnos/:id/atendido",verificarToken,permitirRoles(1),TurnosreservaController.atenderTurno);         

export default router;