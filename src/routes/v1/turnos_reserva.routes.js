// Código de Angel C.
import {Router} from 'express';
import {validarTurnosReservas} from '../../middlewares/turnos_reserva.validator.js';
import turnosReservaController from '../../controllers/turnos_reserva.controller.js';


const turnosReservaRouter = Router();

turnosReservaRouter.get('/', turnosReservaController.buscarTurnos);
turnosReservaRouter.get('/:id', turnosReservaController.buscarTurnoPorId);
turnosReservaRouter.post('/', validarTurnosReservas, turnosReservaController.crearTurno);
turnosReservaRouter.put('/:id', validarTurnosReservas, turnosReservaController.actualizarTurno);
turnosReservaRouter.patch('/:id/atender', turnosReservaController.atenderTurno);
turnosReservaRouter.delete('/:id', turnosReservaController.borrarTurno);

export default turnosReservaRouter;