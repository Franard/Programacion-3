import { check, validationResult } from 'express-validator';

export const validarEspecialidad = [
    check('nombre')
        .notEmpty().withMessage('El nombre de la especialidad es obligatorio')
        .isString().withMessage('El nombre debe ser texto')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    
    // Middleware que atrapa errores 
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }
        next();
    }
];