// Código de Angel C.
import 'dotenv/config';
import express from 'express';
import cors from "cors";
import helmet from "helmet";
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import especialidadesRoutes from './src/routes/v1/especialidades.routes.js';
import medicosRoutes from './src/routes/v1/medicos.routes.js';
import usuariosRoutes from './src/routes/v1/usuarios.routes.js';
import pacientesRouter from './src/routes/v1/pacientes.routes.js';
import obrasSocialesRouter from './src/routes/v1/obras_sociales.routes.js';
import medicosObrasSocialesRouter from './src/routes/v1/medicos_obras_sociales.routes.js';
import turnosReservaRouter from './src/routes/v1/turnos_reserva.routes.js';
import authRoutes from './src/routes/v1/auth.routes.js';
import estadisticasRoutes from './src/routes/v1/estadisticas.routes.js';
import reportesRoutes from './src/routes/v1/reportes.routes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

const app = express();
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan('dev'));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1/especialidades', especialidadesRoutes);
app.use('/api/v1/medicos', medicosRoutes);
app.use('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/pacientes', pacientesRouter);
app.use('/api/v1/obras-sociales', obrasSocialesRouter);
app.use('/api/v1/medicos-obras-sociales', medicosObrasSocialesRouter);
app.use('/api/v1/turnos-reserva', turnosReservaRouter);
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/estadisticas", estadisticasRoutes);
app.use("/api/v1/reportes", reportesRoutes);

app.use((req, res) => {
    res.status(404).json({ estado: false, mensaje: 'Ruta no encontrada' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
