// Código de Angel C.
import {check, validationResult  } from 'express-validator';

export const validarPacientes = [
    check('idPaciente')
    .notEmpty().withMessage('El id del paciente es obligatorio')
    .isInt().withMessage('El id del paciente debe ser un número entero'),
    check('idUsuario')
    .notEmpty().withMessage('El id del usuario es obligatorio')
    .isInt().withMessage('El id del usuario debe ser un número entero'),
    check('idObraSocial')
    .notEmpty().withMessage('El id de la obra social es obligatorio')
    .isInt().withMessage('El id de la obra social debe ser un número entero'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }
        next();
    }
];

