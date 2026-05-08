import 'dotenv/config';
import express from 'express';
import especialidadesRoutes from './src/routes/v1/especialidades.routes.js';

const app = express();

app.use(express.json()); 

app.use('/api/v1/especialidades', especialidadesRoutes);

app.use((req, res) => {
    res.status(404).json({ estado: false, mensaje: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});