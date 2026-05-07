import { pool } from '../db.js';

export const obtenerUsuario = async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
};

export const crearUsuario = async (id, documento, nombre, apellido, email, contraseña, foto_path, rol, activo ) => {
    const [result] = await db.query(
        'INSERT INTO usuarios(id, documento, nombre, apellido, email, contraseña, foto_path, rol, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [id, documento, nombre, apellido, email, contraseña, foto_path, rol, activo]
    );

    return result;
};