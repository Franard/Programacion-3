
import { pool } from "./connection.js";

class EstadisticasDB {
    obtenerEstadisticas = async () => {
        const [resultado] = await pool.query("CALL obtener_estadisticas()");
        // Extrae el objeto resultado del Stored Procedure
        return resultado[0][0];
    }
}

export default new EstadisticasDB();