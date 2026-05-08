import {
    crearUsuario,
    obtenerUsuarios
} from '../models/usuario.model.js';

export const getUsuarios = async (req, res) => {

    try {

        const usuarios = await obtenerUsuarios();

        res.json(usuarios);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

};

export const postUsuario = async (req, res) => {

    try {

        const resultado = await crearUsuario(req.body);

        res.json({
            mensaje: 'Usuario creado',
            id: resultado.insertId
        });

    } 
    catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }
};