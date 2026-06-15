
import { Router } from 'express';
import ReportesController from '../../controllers/reportes.controller.js';
import { verificarToken } from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';

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
router.get("/turnos/pdf", verificarToken, permitirRoles(3), ReportesController.pdf);

export default router;