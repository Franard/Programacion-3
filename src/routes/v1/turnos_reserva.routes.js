import {router} from 'express';
import {validateTurnosReserva} from '../../middlewares/turnos_reserva.validator.js';
import TurnosReservaController from '../../controllers/turnos_reserva.controller.js';

const turnosReservaController = new TurnosReservaController();
const turnosReservaRouter = router();

turnosReservaRouter.get('/:id', turnosReservaController.buscarTurnoPorId);
turnosReservaRouter.post('/', validateTurnosReserva, turnosReservaController.crearTurno);
turnosReservaRouter.put('/:id', validateTurnosReserva, turnosReservaController.actualizarTurno);
turnosReservaRouter.patch('/:id/atender', turnosReservaController.atenderTurno);
turnosReservaRouter.delete('/:id', turnosReservaController.borrarTurno);

export default turnosReservaRouter;