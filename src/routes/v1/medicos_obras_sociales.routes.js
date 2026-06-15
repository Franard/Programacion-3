
import {Router} from 'express';
import {validarMedicosObrasSociales} from '../../middlewares/medicos_obras_sociales.validator.js';
import medicosObrasSocialesController from '../../controllers/medicos_obras_sociales.controller.js';
import { verificarToken } from '../../middlewares/auth.js';
import { permitirRoles } from '../../middlewares/roles.js';


const medicosObrasSocialesRouter = Router();

/**
 * @swagger
 * /api/v1/medicos-obras-sociales:
 *   get:
 *     summary: Obtener todos los médicos y sus obras sociales
 *     tags: [MedicosObrasSociales]
 *     responses:
 *       200:
 *         description: Éxito
 */
medicosObrasSocialesRouter.get('/', verificarToken, permitirRoles(3), medicosObrasSocialesController.buscarMOS);

/**
 * @swagger
 * /api/v1/medicos-obras-sociales/{idMedico}/{idObraSocial}:
 *   get:
 *     summary: Obtener médico-obra social por sus IDs
 *     tags: [MedicosObrasSociales]
 *     responses:
 *       200:
 *         description: Éxito
 */
medicosObrasSocialesRouter.get('/:idMedico/:idObraSocial', verificarToken, permitirRoles(3), medicosObrasSocialesController.buscarMOSPorIds);

/**
 * @swagger
 * /api/v1/medicos-obras-sociales:
 *   post:
 *     summary: Crear relación médico-obra social
 *     tags: [MedicosObrasSociales]
 *     responses:
 *       201:
 *         description: Creado con éxito
 */
medicosObrasSocialesRouter.post('/', verificarToken, permitirRoles(3), validarMedicosObrasSociales, medicosObrasSocialesController.crearMOS);

/**
 * @swagger
 * /api/v1/medicos-obras-sociales/{idMedico}/{idObraSocialVieja}:
 *   put:
 *     summary: Actualizar relación médico-obra social
 *     tags: [MedicosObrasSociales]
 *     responses:
 *       200:
 *         description: Actualizado con éxito
 */
medicosObrasSocialesRouter.put('/:idMedico/:idObraSocialVieja', verificarToken, permitirRoles(3), validarMedicosObrasSociales, medicosObrasSocialesController.actualizarMOS);

/**
 * @swagger
 * /api/v1/medicos-obras-sociales/{idMedico}/{idObraSocial}:
 *   delete:
 *     summary: Eliminar relación médico-obra social
 *     tags: [MedicosObrasSociales]
 *     responses:
 *       200:
 *         description: Eliminado con éxito
 */
medicosObrasSocialesRouter.delete('/:idMedico/:idObraSocial', verificarToken, permitirRoles(3), medicosObrasSocialesController.borrarMOS);

export default medicosObrasSocialesRouter;

