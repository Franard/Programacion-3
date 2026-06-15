// Código de Angel C.
import {Router} from "express";
import AuthController from '../../controllers/auth.controller.js';
import upload from "../../middlewares/upload.js";

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
 * /api/v1/auth/registro:
 *   post:
 *     summary: Registro público de pacientes
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
import { validarRegistro } from "../../middlewares/usuarios.validator.js";
router.post("/registro", upload.single("foto"), validarRegistro, AuthController.registro);

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