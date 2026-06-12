import {check, validationResult} from 'express-validator';

export const validarTurnoReserva = [
    check('idPaciente')
        .notEmpty().withMessage('El id del paciente es obligatorio')
        .isInt().withMessage('El id del paciente debe ser un número entero'),
    check('idMedico')
        .notEmpty().withMessage('El id del médico es obligatorio')
        .isInt().withMessage('El id del médico debe ser un número entero'),
    check('fecha_hora')
        .notEmpty().withMessage('La fecha y hora son obligatorias')
        .isISO8601().withMessage('La fecha y hora deben tener un formato válido'),
    check('idObrasocial')
        .notEmpty().withMessage('El id de la obra social es obligatorio')
        .isInt().withMessage('El id de la obra social debe ser un número entero'),
    check('valor_total')
        .notEmpty().withMessage('El valor total es obligatorio')
        .isFloat({ min: 1 }).withMessage('El valor total debe ser un número positivo'),
    check('atendido')
        .notEmpty().withMessage('El campo atendido es obligatorio')
        .isIn([0, 1]).withMessage('El campo atendido debe ser un entero (0 o 1)'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ estado: false, errores: errors.array() });
        }
        next();
    }
    
];