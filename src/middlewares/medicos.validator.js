import { check, validationResult } from 'express-validator';

export const validarMedico = [
    check('id_usuario')
        .notEmpty().withMessage('El id_usuario es obligatorio')
        .isInt().withMessage('El id_usuario debe ser un número entero'),
    
    check('id_especialidad')
        .notEmpty().withMessage('El id_especialidad es obligatorio')
        .isInt().withMessage('El id_especialidad debe ser un número entero'),
    
    check('matricula')
        .notEmpty().withMessage('La matrícula es obligatoria')
        .isString().withMessage('La matrícula debe ser un texto').escape(),
    
    check('valor_consulta')
        .notEmpty().withMessage('El valor de la consulta es obligatorio')
        .isNumeric().withMessage('El valor de la consulta debe ser numérico'),

    // revisar errores
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }
        next(); 
    }
];