import { check, validationResult  } from 'express-validator';
export const validarMedicosObrasSociales = [
    check('idMedico').isInt().withMessage('El id del médico debe ser un número entero'),
    check('idObraSocial').isInt().withMessage('El id de la obra social debe ser un número entero'),
    check('activo').optional().isBoolean().withMessage('El campo activo debe ser un valor booleano'),
];
