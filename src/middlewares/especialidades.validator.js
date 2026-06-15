import { check, validationResult } from 'express-validator';

export const validarEspecialidad = [
    check('nombre')
        .notEmpty().withMessage('El nombre de la especialidad es obligatorio')
        .isString().withMessage('El nombre debe ser texto').escape()
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    
    // Atrapa errores de validación
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }
        next();
    }
];