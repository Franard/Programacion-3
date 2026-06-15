// Código de Angel C.
import turnos_reservaService from '../services/turnos_reserva.service.js';

class TurnosReservaController {
    buscarTurnos = async (req, res) => {
        const turnos = await turnos_reservaService.obtenerTurnos();
        res.status(200).json(turnos);
    };

    buscarTurnoPorId = async (req, res) => {
        const id = req.params.id;
        const turno = await turnos_reservaService.obtenerTurnoPorId(id);
        if (turno) {
            res.status(200).json(turno);
        } else {
            res.status(404).json({ message: 'Turno no encontrado' });
        }
    };

    crearTurno = async (req, res) => {
        const nuevoTurno = await turnos_reservaService.crearTurno(req.body);
        res.status(201).json({ estado: true, mensaje: 'Turno creado', datos: nuevoTurno });
    };

    actualizarTurno = async (req, res) => {
        const id = req.params.id;
        await turnos_reservaService.actualizarTurno(id, req.body);
        res.status(200).json({ message: 'Turno actualizado' });
    };

    atenderTurno = async (req, res) => {
        const id = req.params.id;
        await turnos_reservaService.atenderTurno(id);
        res.status(200).json({ message: 'Turno atendido' });
    };

    borrarTurno = async (req, res) => {
        const id = req.params.id;
        await turnos_reservaService.borrarTurno(id);
        res.status(200).json({ message: 'Turno borrado (lógico)' });
    };
}

export default new TurnosReservaController();