import { Router } from 'express';
import EspecialidadesController from '../../controllers/especialidades.controller.js';
import { validarEspecialidad } from '../../middlewares/especialidades.validator.js';

const router = Router();
const controller = new EspecialidadesController();


/**
 * @swagger
 * /api/v1/especialidades:
 *   get:
 *     summary: Operación GET para Especialidades
 *     tags: [Especialidades]
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
router.get('/', controller.buscarTodas);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   get:
 *     summary: Operación GET para Especialidades
 *     tags: [Especialidades]
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
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /api/v1/especialidades:
 *   post:
 *     summary: Operación POST para Especialidades
 *     tags: [Especialidades]
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
router.post('/', validarEspecialidad, controller.crear);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   put:
 *     summary: Operación PUT para Especialidades
 *     tags: [Especialidades]
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
router.put('/:id', validarEspecialidad, controller.actualizar);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   delete:
 *     summary: Operación DELETE para Especialidades
 *     tags: [Especialidades]
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
router.delete('/:id', controller.borrar); // Soft Delete

export default router;