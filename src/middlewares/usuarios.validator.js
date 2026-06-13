// Código de Angel C.
import { check, validationResult } from 'express-validator';

export const validarUsuario = [
    check('id_usuario')
        .notEmpty().withMessage('El ID de usuario es obligatorio')
        .isString().withMessage('El ID de usuario debe ser texto'),
    check('documento')
        .notEmpty().withMessage('El documento es obligatorio')
        .isString().withMessage('El documento debe ser texto'),
    
    check('nombres')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser texto'),
    
    check('apellido')
        .notEmpty().withMessage('El apellido es obligatorio')
        .isString().withMessage('El apellido debe ser texto'),
    
    check('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe tener un formato de email válido'),
    
    check('contrasenia')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
        
    check('rol')
        .notEmpty().withMessage('El rol es obligatorio')
        .isInt().withMessage('El rol debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }
        next();
    }
];