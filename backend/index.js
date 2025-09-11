require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas o local
const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/medicina_books";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Conectado a MongoDB");
});

// Modelos importados
const Book = require("./models/Book");
const Order = require("./models/Order");

// Endpoints REST
app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: "ID inválido" });
  }
});

// Endpoint para crear una orden
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json({ orderId: savedOrder._id });
  } catch (err) {
    res.status(400).json({ error: "No se pudo guardar la orden" });
  }
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
