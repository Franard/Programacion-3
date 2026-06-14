// Código de Angel C.
import { Router } from 'express';
import ReportesController from '../../controllers/reportes.controller.js';

const router = Router();


/**
 * @swagger
 * /api/v1/reportes/turnos/pdf:
 *   get:
 *     summary: Operación GET para Reportes
 *     tags: [Reportes]
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
router.get("/turnos/pdf",ReportesController.pdf);

export default router;