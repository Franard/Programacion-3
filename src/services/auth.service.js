
import UsuariosDB from "../db/usuarios.db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


class AuthService {


    login = async(email,password)=>{


        const usuario = await UsuariosDB.buscarPorEmail(email);


        if(!usuario){
            throw new Error("Usuario no encontrado");
        }


        const passwordCorrecta =
            await bcrypt.compare(
                password,
                usuario.contrasenia
            );


        if(!passwordCorrecta){
            throw new Error("Contraseña incorrecta");
        }


        const token = jwt.sign(

            {
                id_usuario: usuario.id_usuario,
                rol: usuario.rol
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"2h"
            }

        );


        return {
            usuario:{
                id:usuario.id_usuario,
                nombre:usuario.nombres,
                rol:usuario.rol
            },
            token
        };

    }

    registro = async (usuarioData, idObraSocial) => {
        // Validar obra social
        const { default: ObrasSocialesDB } = await import('../db/obras_sociales.db.js');
        const obraSocial = await ObrasSocialesDB.buscarOSPorId(idObraSocial);
        
        if (!obraSocial) {
            throw new Error("La Obra Social especificada no existe o no está activa");
        }

        // Forzar rol paciente
        usuarioData.rol = 2;

        // Crear usuario base
        const { default: UsuariosService } = await import('./usuarios.service.js');
        const nuevoUsuario = await UsuariosService.crearUsuario(usuarioData);

        // Crear paciente
        const { default: PacientesService } = await import('./pacientes.service.js');
        const nuevoPaciente = await PacientesService.crearPaciente(nuevoUsuario.id_usuario, idObraSocial);

        return nuevoPaciente;
    }
}


export default new AuthService();