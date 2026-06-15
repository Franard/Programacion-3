
import { check, validationResult  } from "express-validator";

export const validarObrasSociales = [
    check('nombre')
        .notEmpty().withMessage('El nombre de la obra social es obligatorio')
        .isString().withMessage('El nombre debe ser texto').escape()
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

    check('descripcion')
        .optional()
        .isString().withMessage('La descripción debe ser texto').escape(),

    check('porcentaje')
        .notEmpty().withMessage('El porcentaje es obligatorio')
        .isFloat({ min: 0, max: 100 }).withMessage('El porcentaje debe ser un número entre 0 y 100'),

    check('es_particular')
        .notEmpty().withMessage('El campo es_particular es obligatorio')
        .isBoolean().withMessage('El campo es_particular debe ser un valor booleano'),

    check('activo')
        .notEmpty().withMessage('El campo activo es obligatorio')
        .isBoolean().withMessage('El campo activo debe ser un valor booleano'),
        
    // Atrapa errores de validación
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }     next();
    }
];