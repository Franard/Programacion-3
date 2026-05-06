import * as especialidadesService from '../services/especialidades.service.js';

export const getAll = async (req, res) => {
    try {
        const data = await especialidadesService.getAllEspecialidadesService();
        res.status(200).json(data);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getById = async (req, res) => {
    try {
        const data = await especialidadesService.getEspecialidadByIdService(req.params.id);
        res.status(200).json(data);
    } catch (err) { res.status(404).json({ error: err.message }); }
};

export const create = async (req, res) => {
    try {
        const id = await especialidadesService.createEspecialidadService(req.body.nombre);
        res.status(201).json({ id, message: 'Creado con éxito' });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

export const update = async (req, res) => {
    try {
        await especialidadesService.updateEspecialidadService(req.params.id, req.body.nombre);
        res.status(200).json({ message: 'Actualizado con éxito' });
    } catch (err) { res.status(404).json({ error: err.message }); }
};

export const remove = async (req, res) => {
    try {
        await especialidadesService.deleteEspecialidadService(req.params.id);
        res.status(200).json({ message: 'Eliminado con éxito' }); //soft
    } catch (err) { res.status(404).json({ error: err.message }); }
};