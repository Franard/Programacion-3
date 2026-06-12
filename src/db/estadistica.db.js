import {pool} from "./connection.js";


class EstadisticasDB{


obtenerEstadisticas = async()=>{


const [resultado] =
await pool.query(
"CALL obtener_estadisticas_turnos()"
);


return resultado[0];


}


}


export default new EstadisticasDB();