import EstadisticasDB from "../db/estadisticas.db.js";


class EstadisticasService{


obtener = async()=>{

return await EstadisticasDB.obtenerEstadisticas();

}


}


export default new EstadisticasService();