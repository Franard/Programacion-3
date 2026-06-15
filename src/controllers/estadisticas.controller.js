
import EstadisticasService from "../services/estadisticas.service.js";

class EstadisticasController{
    obtener = async(req,res)=>{
        try {
            const datos = await EstadisticasService.obtener();
            res.json(datos);
        } catch(error) {
            throw error;
        }
    }
}

export default new EstadisticasController();