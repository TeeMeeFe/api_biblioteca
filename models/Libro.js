const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/biblioteca";

mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log(`Conectado con MongoDB en "${mongoURI}"`);
});

const libroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
  },
  { collection: "libros" }
);

const Libro = mongoose.model("Libro", libroSchema);

module.exports = Libro;
