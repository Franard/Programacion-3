// Código de Angel C.
import EspecialidadesDB from '../db/especialidades.db.js';

export default class EspecialidadesService {
    constructor() {
        this.db = new EspecialidadesDB();
    }

    async buscarTodas() {
        return await this.db.buscarTodas();
    }

    async buscarPorId(id) {
        const especialidad = await this.db.buscarPorId(id);
        if (!especialidad) {
            const error = new Error('Especialidad no encontrada');
            error.status = 404;
            throw error;
        }
        return especialidad;
    }

    async crear(datos) {
        const insertId = await this.db.crear(datos.nombre);
        // Devuelve objeto completo
        return await this.db.buscarPorId(insertId);
    }

    async actualizar(id, datos) {
        // Chequeo de existencia
        const existe = await this.db.buscarPorId(id);
        if (!existe) {
            const error = new Error('Especialidad no encontrada para actualizar');
            error.status = 404;
            throw error;
        }
        await this.db.actualizar(id, datos.nombre);
    }

    async borrar(id) {
        // Chequeo de existencia
        const existe = await this.db.buscarPorId(id);
        if (!existe) {
            const error = new Error('Especialidad no encontrada para borrar');
            error.status = 404;
            throw error;
        }
        await this.db.borrar(id);
    }
}