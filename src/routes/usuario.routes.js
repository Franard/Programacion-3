import { Router } from 'express';

import {
    postUsuario,
    getUsuarios,
} from '../controllers/usuario.controller.js';

const router = Router();

router.get('/', getUsuarios);

router.post('/', postUsuario);

export default router;