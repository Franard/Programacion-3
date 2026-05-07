import { Router } from 'express';

import {
    getUsuario,
    postUsuario
} from '../controllers/usuario.controller.js';

const router = Router();

router.get('/', getUsuario);
router.post('/', postUsuario);

export default router;