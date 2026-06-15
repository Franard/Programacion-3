
import EstadisticasService from "../services/estadisticas.service.js";
import ReportesService from "../services/reportes.service.js";

class ReportesController{

    pdf = async(req,res)=>{
        const datos = await EstadisticasService.obtener();
        const pdf = ReportesService.generarPDF(datos);
        res.setHeader(
        "Content-Type",
        "application/pdf"
        );
        pdf.pipe(res);
        pdf.end();
    }


}


export default new ReportesController();