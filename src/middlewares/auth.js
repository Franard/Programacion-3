import jwt from "jsonwebtoken";


export const verificarToken = (req,res,next)=>{

    const token = req.headers.authorization?.split(" ")[1];


    if(!token){
        return res.status(401).json({
            error:"Token requerido"
        });
    }


    try{

        const datos = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        req.usuario = datos;

        next();


    }catch(error){

        return res.status(401).json({
            error:"Token inválido"
        });

    }

};