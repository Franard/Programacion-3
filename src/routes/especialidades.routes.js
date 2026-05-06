import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import * as especialidadesController from '../controllers/especialidades.controller.js';

const router = Router();

//capturar errores de validación
const validarSoli = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() }); // Error cliente
    }
    next();
};

// Reglas
const validacionNombre = [
    body('nombre')
        .exists().withMessage('El nombre es requerido')
        .trim()
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isLength({ min: 3, max: 120 }).withMessage('Debe tener entre 3 y 120 caracteres'),
    validarSoli
];


router.get('/', especialidadesController.getAll);           
router.get('/:id', especialidadesController.getById);      
router.post('/', validacionNombre, especialidadesController.create);
router.put('/:id', validacionNombre, especialidadesController.update); 
router.delete('/:id', especialidadesController.remove);   

export default router;