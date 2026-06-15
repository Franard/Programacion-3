
import {Router} from 'express';
import {validarTurnosReservas} from '../../middlewares/turnos_reserva.validator.js';
import turnosReservaController from '../../controllers/turnos_reserva.controller.js';
import { verificarToken } from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';


const turnosReservaRouter = Router();

/**
 * @swagger
 * /api/v1/turnos-reserva:
 *   get:
 *     summary: Obtener todos los turnos
 *     tags: [TurnosReserva]
 *     responses:
 *       200:
 *         description: Éxito
 */
turnosReservaRouter.get('/', verificarToken, permitirRoles(1, 2, 3), turnosReservaController.buscarTurnos);

/**
 * @swagger
 * /api/v1/turnos-reserva/{id}:
 *   get:
 *     summary: Obtener turno por ID
 *     tags: [TurnosReserva]
 *     responses:
 *       200:
 *         description: Éxito
 */
turnosReservaRouter.get('/:id', verificarToken, permitirRoles(1, 2, 3), turnosReservaController.buscarTurnoPorId);

/**
 * @swagger
 * /api/v1/turnos-reserva:
 *   post:
 *     summary: Crear turno
 *     tags: [TurnosReserva]
 *     responses:
 *       201:
 *         description: Creado con éxito
 */
turnosReservaRouter.post('/', verificarToken, permitirRoles(2, 3), validarTurnosReservas, turnosReservaController.crearTurno);

/**
 * @swagger
 * /api/v1/turnos-reserva/{id}:
 *   put:
 *     summary: Actualizar turno
 *     tags: [TurnosReserva]
 *     responses:
 *       200:
 *         description: Actualizado con éxito
 */
turnosReservaRouter.put('/:id', verificarToken, permitirRoles(3), validarTurnosReservas, turnosReservaController.actualizarTurno);

/**
 * @swagger
 * /api/v1/turnos-reserva/{id}/atender:
 *   patch:
 *     summary: Marcar turno como atendido
 *     tags: [TurnosReserva]
 *     responses:
 *       200:
 *         description: Turno atendido con éxito
 */
turnosReservaRouter.patch('/:id/atender', verificarToken, permitirRoles(1), turnosReservaController.atenderTurno);

/**
 * @swagger
 * /api/v1/turnos-reserva/{id}:
 *   delete:
 *     summary: Eliminar turno
 *     tags: [TurnosReserva]
 *     responses:
 *       200:
 *         description: Eliminado con éxito
 */
turnosReservaRouter.delete('/:id', verificarToken, permitirRoles(3), turnosReservaController.borrarTurno);

export default turnosReservaRouter;