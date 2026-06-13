// Código de Angel C.
import {Router} from "express";

import EstadisticasController from "../../controllers/estadisticas.controller.js";


const router = Router();


router.get(
"/",
EstadisticasController.obtener
);


export default router;