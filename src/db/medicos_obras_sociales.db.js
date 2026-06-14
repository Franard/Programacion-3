// Código de Angel C.
import { pool } from './connection.js';

class MedicosObrasSocialesDB {
    async buscarMOS() {
        const [rows] = await pool.query(
            'SELECT * FROM medicos_obras_sociales WHERE activo = 1'
        );
        return rows;
    }

    async buscarMOSPorIds(idMedico, idObraSocial) {
        const [rows] = await pool.query(
            'SELECT * FROM medicos_obras_sociales WHERE id_medico = ? AND id_obra_social = ? AND activo = 1',
            [idMedico, idObraSocial]
        );
        return rows[0];
    }

    async crearMOS(idMedico, idObraSocial) {
        const [resultado] = await pool.query(
            'INSERT INTO medicos_obras_sociales (id_medico, id_obra_social, activo) VALUES (?, ?, 1)',
            [idMedico, idObraSocial]
        );
        return resultado.affectedRows;
    }

    async eliminarMOS(idMedico, idObraSocial) {
        await pool.query(
            'UPDATE medicos_obras_sociales SET activo = 0 WHERE id_medico = ? AND id_obra_social = ?',
            [idMedico, idObraSocial]
        );
    }

    async actualizarMOS(idMedico, idObraSocialVieja, idObraSocialNueva, activo) {
        await pool.query(
            'UPDATE medicos_obras_sociales SET activo = ?, id_obra_social = ? WHERE id_medico = ? AND id_obra_social = ?',
            [activo, idObraSocialNueva, idMedico, idObraSocialVieja]
        );
    }
}

export default new MedicosObrasSocialesDB();