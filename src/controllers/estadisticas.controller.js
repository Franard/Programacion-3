// Código de Angel C.
import EstadisticasService from "../services/estadisticas.service.js";


class EstadisticasController{


obtener = async(req,res)=>{

try{

const datos =
await EstadisticasService.obtener();


res.json(datos);


}catch(error){

res.status(500).json({
error:error.message
});

}

}


}


export default new EstadisticasController();