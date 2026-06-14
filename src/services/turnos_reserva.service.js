// Código de Angel C.
import turnosDB from '../db/turnos_reserva.db.js';
import MedicosDB from '../db/medicos.db.js';
import ObrasSocialesDB from '../db/obras_sociales.db.js';

class TurnosService {
    async obtenerTurnos() {
        return await turnosDB.buscarTurnos();
    } 
    async obtenerTurnoPorId(id) {
        return await turnosDB.buscarTurnoPorId(id);
    }
    crearTurno = async(turno) => {
        const medico = await MedicosDB.obtenerPorId(turno.id_medico);
        if (!medico) {
            const error = new Error('Médico no encontrado o inactivo');
            error.status = 404;
            throw error;
        }

        const obra = await ObrasSocialesDB.obtenerObraSocialPorId(turno.id_obra_social);
        if (!obra) {
            const error = new Error('Obra social no encontrada o inactiva');
            error.status = 404;
            throw error;
        }

        let valorTotal;

        if (obra.es_particular == 1) {
            valorTotal = medico.valor_consulta;
        } else {
            valorTotal = medico.valor_consulta - (obra.porcentaje_descuento * medico.valor_consulta);
        }
        
        turno.valor_total = valorTotal;
        const nuevoId = await turnosDB.crearTurno(turno);
        return await turnosDB.buscarTurnoPorId(nuevoId);
    }
    async actualizarTurno(id, turno) {
        const existe = await turnosDB.buscarTurnoPorId(id);
        if (!existe) {
            const error = new Error('Turno no encontrado para actualizar');
            error.status = 404;
            throw error;
        }
        await turnosDB.actualizarTurno(id, turno);
    }
    async atenderTurno(id) {
        await turnosDB.atender(id);
    }
    async borrarTurno(id) {
        await turnosDB.borrarTurno(id);
    }
}

export default new TurnosService();