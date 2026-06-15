
import MedicosObrasSocialesDB from '../db/medicos_obras_sociales.db.js';

import { pool } from '../db/connection.js';

class MedicosObrasSocialesService {
    buscarMOS = async () => {
        return await MedicosObrasSocialesDB.buscarMOS();
    };

    buscarMOSPorIds = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.buscarMOSPorIds(idMedico, idObraSocial);
    };

    // Sincronizar obras sociales (Transacción)
    vincularObrasSociales = async (idMedico, obrasSocialesIds) => {
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        try {
            // Baja lógica previa
            await conn.query('UPDATE medicos_obras_sociales SET activo = 0 WHERE id_medico = ?', [idMedico]);
            
            // Nuevas asociaciones
            for (const idObraSocial of obrasSocialesIds) {
                // Reactivar o insertar
                const [existente] = await conn.query('SELECT * FROM medicos_obras_sociales WHERE id_medico = ? AND id_obra_social = ?', [idMedico, idObraSocial]);
                if (existente.length > 0) {
                    await conn.query('UPDATE medicos_obras_sociales SET activo = 1 WHERE id_medico = ? AND id_obra_social = ?', [idMedico, idObraSocial]);
                } else {
                    await conn.query('INSERT INTO medicos_obras_sociales (id_medico, id_obra_social, activo) VALUES (?, ?, 1)', [idMedico, idObraSocial]);
                }
            }
            
            await conn.commit();
        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    };

    crearMOS = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.crearMOS(idMedico, idObraSocial);
    };

    actualizarMOS = async (idMedico, idObraSocialVieja, idObraSocialNueva, activo) => {
        return await MedicosObrasSocialesDB.actualizarMOS(idMedico, idObraSocialVieja, idObraSocialNueva, activo);
    };

    borrarMOS = async (idMedico, idObraSocial) => {
        return await MedicosObrasSocialesDB.eliminarMOS(idMedico, idObraSocial);
    };
}

export default new MedicosObrasSocialesService();