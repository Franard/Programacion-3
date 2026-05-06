import express from 'express';
import morgan from 'morgan';
import especialidadesRoutes from './routes/especialidades.routes.js';

const app = express();

// Middlware
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/especialidades', especialidadesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});