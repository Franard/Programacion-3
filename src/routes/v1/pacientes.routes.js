// Código de Angel C.
import {Router} from 'express';
import {validarPacientes} from '../../middlewares/pacientes.validator.js';
import turnosReservaController from '../../controllers/turnos_reserva.controller.js';
import PacientesController from '../../controllers/pacientes.controller.js';
import {verificarToken} from '../../middlewares/auth.js';
import permitirRoles from '../../middlewares/roles.js';

const router = Router();


/**
 * @swagger
 * /api/v1/pacientes:
 *   get:
 *     summary: Operación GET para Pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/', verificarToken, permitirRoles(1, 2, 3), PacientesController.buscarPacientes);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   get:
 *     summary: Operación GET para Pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', verificarToken, permitirRoles(1, 2, 3), PacientesController.buscarPacientePorId);

/**
 * @swagger
 * /api/v1/pacientes:
 *   post:
 *     summary: Operación POST para Pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.post('/', verificarToken, permitirRoles(3), validarPacientes, PacientesController.crearPaciente);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   put:
 *     summary: Operación PUT para Pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', verificarToken, permitirRoles(3), validarPacientes, PacientesController.actualizarPaciente);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   delete:
 *     summary: Operación DELETE para Pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', verificarToken, permitirRoles(3), PacientesController.borrarPaciente);

/**
 * @swagger
 * /api/v1/pacientes/turnos:
 *   post:
 *     summary: Operación POST para Pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.post("/turnos",verificarToken,permitirRoles(2),turnosReservaController.crearTurno);

export default router;