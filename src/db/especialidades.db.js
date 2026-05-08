import { pool } from './connection.js';

export default class EspecialidadesDB {
    async buscarTodas() {
        const [rows] = await pool.query('SELECT * FROM especialidades WHERE activo = 1');
        return rows;
    }

    async buscarPorId(id) {
        const [rows] = await pool.query(
            'SELECT * FROM especialidades WHERE id_especialidad = ? AND activo = 1', 
            [id]
        );
        return rows[0];
    }

    async crear(nombre) {
        const [result] = await pool.query(
            'INSERT INTO especialidades (nombre) VALUES (?)', 
            [nombre]
        );
        return result.insertId;
    }

    async actualizar(id, nombre) {
        await pool.query(
            'UPDATE especialidades SET nombre = ? WHERE id_especialidad = ?', 
            [nombre, id]
        );
    }

    async borrar(id) {
        await pool.query(
            'UPDATE especialidades SET activo = 0 WHERE id_especialidad = ?', 
            [id]
        );
    }
}