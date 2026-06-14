// Código de Angel C.



import AuthService from '../services/auth.service.js';

class AuthController {

login = async(req,res)=>{

    try{

        const {email,password} = req.body;


        const resultado =
            await AuthService.login(
                email,
                password
            );


        res.json(resultado);


    }catch(error){

        res.status(401).json({
            error:error.message
        });

    }

}


}


export default new AuthController();