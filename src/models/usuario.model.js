import { pool } from '../db.js';

export const obtenerUsuarios = async () => {

    const [rows] = await pool.query(
        'SELECT * FROM usuario'
    );

    return rows;
};

export const crearUsuario = async (usuario) => {

    const {
        documento,
        nombre,
        apellido,
        email,
        contraseña,
        foto_path,
        rol,
        activo
    } = usuario;

    const [result] = await pool.query(
        `
        INSERT INTO usuario
        (
            documento,
            nombre,
            apellido,
            email,
            contraseña,
            foto_path,
            rol,
            activo
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            documento,
            nombre,
            apellido,
            email,
            contraseña,
            foto_path,
            rol,
            activo
        ]
    );

    return result;
};