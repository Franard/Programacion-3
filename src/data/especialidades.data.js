import { pool } from '../db.js';

export const getAllEspecialidadesData = async () => {
    // solo activas
    const [rows] = await pool.query('SELECT * FROM especialidades WHERE activo = 1');
    return rows;
};

export const getEspecialidadByIdData = async (id) => {
    const [rows] = await pool.query('SELECT * FROM especialidades WHERE id_especialidad = ? AND activo = 1', [id]);
    return rows[0];
};

export const createEspecialidadData = async (nombre) => {
    const [result] = await pool.query('INSERT INTO especialidades (nombre) VALUES (?)', [nombre]);
    return result.insertId;
};

export const updateEspecialidadData = async (id, nombre) => {
    await pool.query('UPDATE especialidades SET nombre = ? WHERE id_especialidad = ?', [nombre, id]);
};

export const deleteEspecialidadData = async (id) => {
    // Soft delete
    await pool.query('UPDATE especialidades SET activo = 0 WHERE id_especialidad = ?', [id]);
};