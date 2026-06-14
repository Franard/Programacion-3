// Código de Angel C.
import {pool} from "./connection.js";

class EstadisticasDB {
    obtenerEstadisticas = async () => {
        const [turnos] = await pool.query("SELECT COUNT(*) as total FROM turnos_reservas");
        const [medicos] = await pool.query("SELECT COUNT(*) as total FROM medicos");
        const [pacientes] = await pool.query("SELECT COUNT(*) as total FROM pacientes");
        const [ingresos] = await pool.query("SELECT SUM(valor_total) as total FROM turnos_reservas WHERE atentido = 1");

        return {
            cantidad_turnos: turnos[0].total || 0,
            cantidad_pacientes: pacientes[0].total || 0,
            cantidad_medicos: medicos[0].total || 0,
            ingresos: ingresos[0].total || 0
        };
    }
}

export default new EstadisticasDB();