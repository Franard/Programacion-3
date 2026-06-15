// Código de Angel C.
import {Router} from "express";
import EstadisticasController from "../../controllers/estadisticas.controller.js";
import { verificarToken } from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';


const router = Router();


/**
 * @swagger
 * /api/v1/estadisticas:
 *   get:
 *     summary: Operación GET para Estadísticas
 *     tags: [Estadisticas]
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
router.get(
"/",
verificarToken, permitirRoles(3),
EstadisticasController.obtener
);


export default router;