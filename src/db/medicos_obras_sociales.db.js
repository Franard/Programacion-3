// Código de Angel C.
import { pool } from './connection.js';

class MedicosObrasSocialesDB {
    async buscarMOSPorId(id_MOS) {
        const [rows] = await pool.query(
            'SELECT * FROM medicos_obras_sociales WHERE id_MOS = ? AND activo = 1',
            [id_MOS]
        );
        return rows[0];
    }

    async crearMOS(idMedico, idObraSocial) {

        const conn = await pool.getConnection();
        await conn.beginTransaction();
        try {
            const [resultado] = await conn.query(
                'INSERT INTO medicos_obras_sociales (id_medico, id_obra_social, activo) VALUES (?, ?, 1)',
                [idMedico, idObraSocial]
            );
            await conn.commit();
            return resultado.insertId;
        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    }

    async eliminarMOS(id_MOS, idObraSocial) {
        await pool.query(
            'UPDATE medicos_obras_sociales SET activo = 0 WHERE id = ? AND id_obra_social = ?',
            [id_MOS, idObraSocial]
        );
    }

    async actualizarMOS(id_MOS, idObraSocial, activo) {
        await pool.query(
            'UPDATE medicos_obras_sociales SET activo = ? WHERE id = ? AND id_obra_social = ?',
            [activo, id_MOS, idObraSocial]
        );
    }
}

export default new MedicosObrasSocialesDB();