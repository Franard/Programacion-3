// Código de Angel C.
import {Router} from 'express';
import {validarPacientes} from '../../middlewares/pacientes.validator.js';
import turnosReservaController from '../../controllers/turnos_reserva.controller.js';
import PacientesController from '../../controllers/pacientes.controller.js';
import {verificarToken} from '../../middlewares/auth.js';
import permitirRoles from '../../middlewares/roles.js';

const router = Router();

router.get('/',PacientesController.buscarPacientes);
router.get('/:id',PacientesController.buscarPacientePorId);
router.post('/',validarPacientes,PacientesController.crearPaciente);
router.put('/:id',validarPacientes,PacientesController.actualizarPaciente);
router.delete('/:id',PacientesController.borrarPaciente);
router.post("/turnos",verificarToken,permitirRoles(2),turnosReservaController.crearTurno);

export default router;