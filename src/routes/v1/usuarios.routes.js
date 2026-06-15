
import { Router } from 'express';
import UsuariosController from '../../controllers/usuarios.controller.js';
import { validarUsuario } from '../../middlewares/usuarios.validator.js';
import upload from "../../middlewares/upload.js";
import { verificarToken } from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';
const router = Router();

// Rutas del BREAD para Usuarios

/**
 * @swagger
 * /api/v1/usuarios:
 *   get:
 *     summary: Operación GET para Usuarios
 *     tags: [Usuarios]
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
router.get('/', verificarToken, permitirRoles(3), UsuariosController.obtenerUsuarios);

/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   get:
 *     summary: Operación GET para Usuarios
 *     tags: [Usuarios]
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
router.get('/:id', verificarToken, permitirRoles(3), validarUsuario, UsuariosController.obtenerUsuarioPorId);

/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   put:
 *     summary: Operación PUT para Usuarios
 *     tags: [Usuarios]
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
router.put('/:id', verificarToken, permitirRoles(3), validarUsuario, upload.single("foto"), UsuariosController.actualizarUsuario);

/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   delete:
 *     summary: Operación DELETE para Usuarios
 *     tags: [Usuarios]
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
router.delete('/:id', verificarToken, permitirRoles(3), validarUsuario, UsuariosController.borrarUsuario);

/**
 * @swagger
 * /api/v1/usuarios:
 *   post:
 *     summary: Operación POST para Usuarios
 *     tags: [Usuarios]
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
router.post("/", verificarToken, permitirRoles(3), upload.single("foto"), validarUsuario, UsuariosController.crearUsuario); 

export default router;