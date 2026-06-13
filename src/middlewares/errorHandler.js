export const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Si el error tiene un status asignado (ej. 404, 400), lo usamos. 
    // Si no, devolvemos 500 por defecto.
    const status = err.status || 500;
    const mensaje = err.message || 'Error interno del servidor';

    res.status(status).json({
        estado: false,
        mensaje: mensaje
    });
};
