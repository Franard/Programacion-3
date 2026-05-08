import EspecialidadesDB from '../db/especialidades.db.js';

export default class EspecialidadesService {
    constructor() {
        this.db = new EspecialidadesDB();
    }

    async buscarTodas() {
        return await this.db.buscarTodas();
    }

    async buscarPorId(id) {
        return await this.db.buscarPorId(id);
    }

    async crear(datos) {
        const insertId = await this.db.crear(datos.nombre);
        return insertId;
    }

    async actualizar(id, datos) {
        await this.db.actualizar(id, datos.nombre);
    }

    async borrar(id) {
        await this.db.borrar(id);
    }
}