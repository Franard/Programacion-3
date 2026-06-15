
import AuthService from '../services/auth.service.js';

class AuthController {
    login = async (req, res) => {
        try {
            const { email, contrasenia } = req.body;
            const resultado = await AuthService.login(email, contrasenia);
            res.json(resultado);
        } catch (error) {
            console.error("DEBUG LOGIN:", error.message);
            res.status(401).json({ message: "Login fallido" });
        }
    };

    registro = async (req, res) => {
        try {
            const usuarioData = { ...req.body };
            if (req.file) {
                usuarioData.foto_path = req.file.filename;
            } else {
                usuarioData.foto_path = "default.png";
            }
            const resultado = await AuthService.registro(usuarioData);
            res.status(201).json(resultado);
        } catch (error) {
            throw error;
        }
    };
}

export default new AuthController();