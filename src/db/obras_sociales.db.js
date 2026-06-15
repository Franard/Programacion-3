// Código de Angel C.
import { pool } from './connection.js';

class ObrasSocialesDB {
    async buscarOSActivas() {
        const [rows] = await pool.query(
            'SELECT * FROM obras_sociales WHERE activo = 1'
        );
        return rows;
    }
    async buscarOSPorId(id) {
        const [rows] = await pool.query(
            'SELECT * FROM obras_sociales WHERE id_obra_social = ? AND activo = 1',
            [id]
        );
        return rows[0];
    }
    async crearOS(nombre, descripcion, porcentaje, es_particular,activo) {
        const [result] = await pool.query(
            'INSERT INTO obras_sociales (nombre, descripcion , porcentaje_descuento, es_particular ,activo) VALUES (?, ?, ?, ?, ?)',
            [nombre, descripcion, porcentaje, es_particular, activo]
        );
        return result.insertId;
    }
    async actualizarOS(id, nombre, descripcion, porcentaje, es_particular, activo) {
        await pool.query(
            'UPDATE obras_sociales SET nombre = ?, descripcion = ?, porcentaje_descuento = ?, es_particular = ?, activo = ? WHERE id_obra_social = ?',
            [nombre, descripcion, porcentaje, es_particular, activo, id]
        );
    }
}
 

export default new ObrasSocialesDB();
