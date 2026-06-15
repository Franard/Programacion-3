// Código de Angel C.
import { Router } from 'express';
import MedicosController from '../../controllers/medicos.controller.js';
import { validarMedico } from '../../middlewares/medicos.validator.js';
import {verificarToken} from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';
import TurnosreservaController from '../../controllers/turnos_reserva.controller.js';

const router = Router();

// Rutas del BREAD para Médicos

/**
 * @swagger
 * /api/v1/medicos:
 *   get:
 *     summary: Operación GET para Medicos
 *     tags: [Medicos]
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
router.get('/', verificarToken, permitirRoles(2, 3), MedicosController.obtenerTodos);

/**
 * @swagger
 * /api/v1/medicos/{id}:
 *   get:
 *     summary: Operación GET para Medicos
 *     tags: [Medicos]
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
router.get('/:id', verificarToken, permitirRoles(2, 3), MedicosController.obtenerPorId);

/**
 * @swagger
 * /api/v1/medicos:
 *   post:
 *     summary: Operación POST para Medicos
 *     tags: [Medicos]
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
router.post('/', verificarToken, permitirRoles(3), validarMedico, MedicosController.crear);

/**
 * @swagger
 * /api/v1/medicos/{id}:
 *   put:
 *     summary: Operación PUT para Medicos
 *     tags: [Medicos]
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
router.put('/:id', verificarToken, permitirRoles(3), validarMedico, MedicosController.actualizar);

/**
 * @swagger
 * /api/v1/medicos/{id}:
 *   delete:
 *     summary: Operación DELETE para Medicos
 *     tags: [Medicos]
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
router.delete('/:id', verificarToken, permitirRoles(3), MedicosController.borrar);

/**
 * @swagger
 * /api/v1/medicos/turnos:
 *   get:
 *     summary: Operación GET para Medicos
 *     tags: [Medicos]
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
router.get("/turnos",verificarToken,permitirRoles(1),TurnosreservaController.buscarTurnos);

/**
 * @swagger
 * /api/v1/medicos/turnos/{id}/atendido:
 *   put:
 *     summary: Operación PUT para Medicos
 *     tags: [Medicos]
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
router.put("/turnos/:id/atendido",verificarToken,permitirRoles(1),TurnosreservaController.atenderTurno);         

export default router;