// Código de Angel C.
import turnosDB from '../db/turnos_reserva.db.js';
class TurnosService {
    async obtenerTurnos() {
        return await turnosDB.buscarTurnos();
    } 
    async obtenerTurnoPorId(id) {
        return await turnosDB.buscarTurnoPorId(id);
    }
    crearTurno = async(turno)=>{
        const medico =await MedicosDB.obtenerPorId(turno.id_medico);
        const obra =await ObrasSocialesDB.obtenerPorId(turno.id_obra_social);

        let valorTotal;

        if(obra.es_particular == 1){valorTotal =medico.valor_consulta;}
        else{valorTotal =medico.valor_consulta -(obra.porcentaje_descuento *medico.valor_consulta);
        }
        turno.valor_total = valorTotal;
        return await TurnosDB.crear(turno);
    }
    async actualizarTurno(id, fecha_hora, valor_total, atendido, activo) {
        await turnosDB.actualizarTurno(id, fecha_hora, valor_total, atendido, activo);
    }
    async atenderTurno(id) {
        await turnosDB.atender(id);
    }
    async borrarTurno(id) {
        await turnosDB.borrarTurno(id);
    }
}

export default new TurnosService();