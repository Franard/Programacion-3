// Código de Angel C.
import {Router} from "express";
import AuthController from '../../controllers/auth.controller.js';


const router = Router();



/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Operación POST para Auth
 *     tags: [Auth]
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
router.post("/login",AuthController.login
);

/**
 * @swagger
 * /api/v1/auth:
 *   get:
 *     summary: Operación GET para Auth
 *     tags: [Auth]
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
router.get("/", (req,res)=>{
    res.json({mensaje:"Auth funcionando"});
});

export default router;