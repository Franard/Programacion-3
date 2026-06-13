// Código de Angel C.
import {Router} from "express";
import AuthController from '../../controllers/auth.controller.js';


const router = Router();


router.post("/login",AuthController.login
);
router.get("/", (req,res)=>{
    res.json({mensaje:"Auth funcionando"});
});

export default router;