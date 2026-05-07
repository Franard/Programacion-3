import {
    obtenerUsuario,
    crearUsuario
} from '../models/usuario.model.js';

export const getUsuario = async (req, res) => {
    try {
        const usuario = await obtenerUsuario();
        res.json(usuario);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const postUsuario = async (req, res) => {
    try {
        const { id, documento, nombre, apellido, email, contraseña, foto_path, rol, activo } = req.body;

        await crearUsuario(id, documento, nombre, apellido, email, contraseña, foto_path, rol, activo);

        res.json({
            mensaje: 'Usuario creado'
        });
    } catch (error) {
        res.status(500).json(error);
    }
};