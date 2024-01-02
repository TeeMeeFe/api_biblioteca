const errorHandler = (err, req, res, next) => {
  // Verificamos si el error tiene un código de estado definido, de lo contrario, establecer el código de estado predeterminado
  const statusCode = err.statusCode || 500;

  // Construimos el objeto de respuesta de error
  const errorResponse = {
    error: {
      message: err.message || "Error interno del servidor",
      code: err.code || "internal_error",
    },
  };

  // Enviamos la respuesta de error en formato JSON
  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
