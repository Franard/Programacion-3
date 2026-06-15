
import {Router} from 'express';
import {validarObrasSociales} from '../../middlewares/obras_sociales.validator.js';
import obrasSocialesController from '../../controllers/obras_sociales.controller.js';
import { verificarToken } from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';


const obrasSocialesRouter = Router();

/**
 * @swagger
 * /api/v1/obras-sociales:
 *   get:
 *     summary: Obtener todas las obras sociales
 *     tags: [ObrasSociales]
 *     responses:
 *       200:
 *         description: Éxito
 */
obrasSocialesRouter.get('/', verificarToken, permitirRoles(3), obrasSocialesController.buscarOS);

/**
 * @swagger
 * /api/v1/obras-sociales/{id}:
 *   get:
 *     summary: Obtener obra social por ID
 *     tags: [ObrasSociales]
 *     responses:
 *       200:
 *         description: Éxito
 */
obrasSocialesRouter.get('/:id', verificarToken, permitirRoles(3), obrasSocialesController.buscarOSPorId);

/**
 * @swagger
 * /api/v1/obras-sociales:
 *   post:
 *     summary: Crear obra social
 *     tags: [ObrasSociales]
 *     responses:
 *       201:
 *         description: Creado con éxito
 */
obrasSocialesRouter.post('/', verificarToken, permitirRoles(3), validarObrasSociales, obrasSocialesController.crearOS);

/**
 * @swagger
 * /api/v1/obras-sociales/{id}:
 *   put:
 *     summary: Actualizar obra social
 *     tags: [ObrasSociales]
 *     responses:
 *       200:
 *         description: Actualizado con éxito
 */
obrasSocialesRouter.put('/:id', verificarToken, permitirRoles(3), validarObrasSociales, obrasSocialesController.actualizarOS);

/**
 * @swagger
 * /api/v1/obras-sociales/{id}:
 *   delete:
 *     summary: Eliminar obra social
 *     tags: [ObrasSociales]
 *     responses:
 *       200:
 *         description: Eliminado con éxito
 */
obrasSocialesRouter.delete('/:id', verificarToken, permitirRoles(3), obrasSocialesController.borrarOS);

export default obrasSocialesRouter;