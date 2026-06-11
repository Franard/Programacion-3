import { pool } from './connection.js';

class MedicosObrasSocialesDB {
    async buscarPorId(id_MOS) {
        const [rows] = await pool.query(
            'SELECT * FROM medicos_obras_sociales WHERE id = ? AND activo = 1',
            [id_MOS]
        );
        return rows[0];
    }
    async crearMedObr(idMedico, idObraSocial) {
        const [resultado] = await pool.query(
            'INSERT INTO medicos_obras_sociales (id_medico, id_obra_social, activo) VALUES (?, ?, 1)',
            [idMedico, idObraSocial]
        );
        return resultado.insertId;
    }
    async eliminarMedObr(id_MOS, idObraSocial) {
        await pool.query(
            'UPDATE medicos_obras_sociales SET activo = 0 WHERE id = ? AND id_obra_social = ?',
            [id_MOS, idObraSocial]
        );
    }
    async modificarMedObr(id_MOS, idObraSocial, activo) {
        await pool.query(
            'UPDATE medicos_obras_sociales SET activo = ? WHERE id = ? AND id_obra_social = ?',
            [activo, id_MOS, idObraSocial]
        );
    }
}

export const medicosObrasSocialesDB = new MedicosObrasSocialesDB();