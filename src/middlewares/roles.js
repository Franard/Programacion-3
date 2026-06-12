export const permitirRoles = (...roles)=>{

    return (req,res,next)=>{


        if(!roles.includes(req.usuario.rol)){

            return res.status(403).json({
                error:"Sin permisos"
            });

        }


        next();
    }

};

export default permitirRoles;