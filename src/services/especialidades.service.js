import * as especialidadesData from '../data/especialidades.data.js';

export const getAllEspecialidadesService = async () => await especialidadesData.getAllEspecialidadesData();

export const getEspecialidadByIdService = async (id) => {
    const especialidad = await especialidadesData.getEspecialidadByIdData(id);
    if (!especialidad) throw new Error('Especialidad no encontrada');
    return especialidad;
};

export const createEspecialidadService = async (nombre) => {
    return await especialidadesData.createEspecialidadData(nombre);
};

export const updateEspecialidadService = async (id, nombre) => {
    await getEspecialidadByIdService(id); //Existe?
    await especialidadesData.updateEspecialidadData(id, nombre);
};

export const deleteEspecialidadService = async (id) => {
    await getEspecialidadByIdService(id);
    await especialidadesData.deleteEspecialidadData(id);
};