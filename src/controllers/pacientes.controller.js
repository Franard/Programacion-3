
import pasientesService from '../services/pacientes.service.js';
class PacientesController {
    buscarPacientes = async (req, res) => {
        try {
            const pacientes = await pasientesService.buscarPacientes();
            res.json(pacientes);
        } catch (error) {
            throw error;
        }
    };
    buscarPacientePorId = async (req, res) => {
        const id = req.params.id;
        try {
            const paciente = await pasientesService.buscarPacientePorId(idPaciente);
            if (paciente) {
                res.json(paciente);
            } else {
                res.status(404).json({ message: 'Paciente no encontrado' });
            }
        } catch (error) {
            throw error;
        }
    };
    crearPaciente = async (req, res) => {
        const { idUsuario, idObraSocial } = req.body;
        try {
            const nuevoPacienteId = await pasientesService.crearPaciente(idUsuario, idObraSocial);
            res.status(201).json({ message: 'Paciente creado', id: nuevoPacienteId });
        } catch (error) {
            throw error;
        }
    };
    actualizarPaciente = async (req, res) => {
        const idPaciente = req.params.id;
        const { idUsuario, idObraSocial } = req.body;
        try {
            await pasientesService.actualizarPaciente(idPaciente, idUsuario, idObraSocial);
            res.json({ message: 'Paciente actualizado' });
        } catch (error) {
            throw error;
        }
    };
    borrarPaciente = async (req, res) => {
        const idPaciente = req.params.id;
        try {
            await pasientesService.borrarPaciente(id);
            res.json({ message: 'Paciente borrado' });
        } catch (error) {
            throw error;
        }
    };
}

export default new PacientesController();