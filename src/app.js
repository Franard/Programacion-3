import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import especialidadesRoutes from './routes/especialidades.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';


const app = express();

// Middlware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Rutas
app.use('/api/especialidades', especialidadesRoutes);
app.use('/api/usuario', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});