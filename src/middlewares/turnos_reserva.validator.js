
import {check, validationResult} from 'express-validator';

export const validarTurnosReservas = [
    check('id_paciente')
        .notEmpty().withMessage('El id del paciente es obligatorio')
        .isInt().withMessage('El id del paciente debe ser un número entero'),
    check('id_medico')
        .notEmpty().withMessage('El id del médico es obligatorio')
        .isInt().withMessage('El id del médico debe ser un número entero'),
    check('fecha_hora')
        .notEmpty().withMessage('La fecha y hora son obligatorias')
        .isISO8601().withMessage('La fecha y hora deben tener un formato válido'),
    check('id_obra_social')
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