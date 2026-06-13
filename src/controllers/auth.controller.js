// Código de Angel C.



class AuthController {


login = async(req,res)=>{

    try{

        const {email,password} = req.body;


        const resultado =
            await AuthController.login(
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