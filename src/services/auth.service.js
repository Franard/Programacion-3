// Código de Angel C.
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


}


export default new AuthService();