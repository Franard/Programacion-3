import turnos_reservaService from '../services/turnos_reserva.service.js';

class TurnosReservaController {
    buscarTurnos = async (req, res) => {
        try {
            const turnos = await turnos_reservaService.buscarTurnos();
            res.json(turnos);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al buscar los turnos', error });
        }
    };

    buscarTurnoPorId = async (req, res) => {
        const id = req.params.id;
        try {
            const turno = await turnos_reservaService.buscarTurnoPorId(id);
            if (turno) {
                res.json(turno);
            } else {
                res.status(404).json({ message: 'Turno no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al buscar el turno', error });
        }
    };

    crearTurno = async (req, res) => {
        const { idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido } = req.body;
        try {
            const nuevoTurnoId = await turnos_reservaService.crearTurno(idMedico, idPaciente, idObrasocial, fecha_hora, valor_total, atendido);
            res.status(201).json({ message: 'Turno creado', id: nuevoTurnoId });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el turno', error });
        }
    };
    actualizarTurno = async (req, res) => {
        const id = req.params.id;
        const { fecha_hora, valor_total, atendido, activo } = req.body;
        try {
            await turnos_reservaService.actualizarTurno(id, fecha_hora, valor_total, atendido, activo);
            res.json({ message: 'Turno actualizado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el turno', error });
        }
    };

    atenderTurno = async (req, res) => {
        const id = req.params.id;
        try {
            await turnos_reservaService.atenderTurno(id);
            res.json({ message: 'Turno atendido' });
        } catch (error) {
            res.status(500).json({ message: 'Error al atender el turno', error });
        }
    };

    borrarTurno = async (req, res) => {
        const id = req.params.id;
        try {
            await turnos_reservaService.borrarTurno(id);
            res.json({ message: 'Turno borrado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al borrar el turno', error });
        }
    };
}

export default new TurnosReservaController();