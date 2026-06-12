import { Router } from 'express';
import ReportesController from '../../controllers/reportes.controller.js';

const router = Router();

router.get("/turnos/pdf",ReportesController.pdf);

export default router;