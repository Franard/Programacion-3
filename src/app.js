import express from 'express';
import morgan from 'morgan';
import especialidadesRoutes from './routes/especialidades.routes.js';

const app = express();

// Midds
app.use(morgan('dev'));
app.use(express.json());

//versionado
app.use('/api/v1/especialidades', especialidadesRoutes);

//E404
app.use((req, res, next) => {
    res.status(404).json({ status: 'error', message: 'Ruta no encontrada' });
});

//
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        status: 'error', 
        message: 'Algo salió mal en el servidor, por favor intente más tarde.' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});