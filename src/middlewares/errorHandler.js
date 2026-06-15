// Código de Angel C.
export const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Define el código de error (por defecto 500)
    const status = err.status || 500;
    const mensaje = err.message; // DEBUG TEMPORAL

    res.status(status).json({
        estado: false,
        mensaje: mensaje
    });
};
