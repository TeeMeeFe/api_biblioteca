const express = require("express");
const app = express();

app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

// Importamos el Middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

app.use("/libros", librosRouter);

app.use(errorHandler);

const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor local creado en el puerto ${puerto}.`);
});
