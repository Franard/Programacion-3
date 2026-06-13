// Código de Angel C.
import PDFDocument from "pdfkit";


class ReportesService{


    generarPDF = (datos)=>{const doc = new PDFDocument();
        doc.fontSize(20)
        .text("Informe de turnos");
        doc.moveDown();
        doc.fontSize(14)
        .text(
        `Cantidad de turnos: ${datos.cantidad_turnos}`
        );
        doc.text(
        `Pacientes: ${datos.cantidad_pacientes}`
        );
        doc.text(
        `Médicos: ${datos.cantidad_medicos}`
        );
        doc.text(
        `Ingresos: $${datos.ingresos}`
        );
        return doc;
    }

}

export default new ReportesService();