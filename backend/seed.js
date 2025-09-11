require("dotenv").config();
const mongoose = require("mongoose");

const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/medicina_books";
mongoose.connect(mongoUri);

const Book = require("./models/Book");

const books = [
  {
    title: "Anatomía con orientación clínica",
    author: "Keith L. Moore, Arthur F. Dalley, Anne M. R. Agur",
    category: "Anatomía",
    description:
      "Un texto clásico que correlaciona la anatomía con su aplicación clínica, ideal para estudiantes de medicina.",
    image: "mooreAnatomia.jpg",
    year: 2018,
    edition: "8ª Edición",
    stock: 45,
    price: 95.0,
  },
  {
    title: "Biología de Campbell",
    author: "Jane B. Reece, Lisa A. Urry, Michael L. Cain, Steven A. Wasserman",
    category: "Biología",
    description:
      "Una obra fundamental que cubre todos los principios de la biología, desde la biología molecular hasta la ecología.",
    image: "biologiaCampbell.jpg",
    year: 2020,
    edition: "12ª Edición",
    stock: 60,
    price: 110.0,
  },
  {
    title: "Braunwald. Tratado de Cardiología",
    author: "Douglas P. Zipes, Peter Libby, Robert O. Bonow",
    category: "Cardiología",
    description:
      "Considerado el manual de referencia en cardiología, abarca todas las enfermedades y tratamientos cardiovasculares.",
    image: "cardiologiaBraunwald.jpg",
    year: 2022,
    edition: "12ª Edición",
    stock: 30,
    price: 250.0,
  },
  {
    title: "Fundamentos de Radiología",
    author: "Frederick A. Mettler Jr.",
    category: "Radiología",
    description:
      "Una introducción completa a la radiología y a las técnicas de imagen médica, incluyendo la interpretación básica.",
    image: "radiologiaMettler.jpg",
    year: 2019,
    edition: "5ª Edición",
    stock: 55,
    price: 85.0,
  },
  {
    title: "Netter. Anatomía Clínica",
    author: "John T. Hansen",
    category: "Anatomía",
    description:
      "Combina la anatomía con la práctica clínica, utilizando las célebres ilustraciones del Dr. Netter.",
    image: "anatomiaNetter.jpg",
    year: 2021,
    edition: "4ª Edición",
    stock: 40,
    price: 80.0,
  },
  {
    title: "Biología Molecular de la Célula",
    author: "Bruce Alberts, Alexander Johnson, Julian Lewis",
    category: "Biología",
    description:
      "Un manual esencial que explora la biología de la célula en profundidad, ideal para estudios avanzados.",
    image: "biologiaAlberts.jpg",
    year: 2017,
    edition: "6ª Edición",
    stock: 35,
    price: 130.0,
  },
  {
    title: "Cardiología Clínica de Goldman",
    author: "Lee Goldman, Andrew I. Schafer",
    category: "Cardiología",
    description:
      "Un compendio conciso pero completo de la cardiología clínica para la práctica diaria.",
    image: "cardiologiaGoldman.jpg",
    year: 2020,
    edition: "10ª Edición",
    stock: 25,
    price: 150.0,
  },
  {
    title: "Radiología Torácica",
    author: "Benjamin Felson",
    category: "Radiología",
    description:
      "Guía práctica para la interpretación de radiografías de tórax, con casos clínicos y ejemplos.",
    image: "radiologiaToracicaFelson.jpg",
    year: 2015,
    edition: "2ª Edición",
    stock: 20,
    price: 75.0,
  },
  {
    title: "Atlas de Anatomía Humana de Rohen",
    author: "Johannes W. Rohen, Chihiro Yokochi, Elke Lütjen-Drecoll",
    category: "Anatomía",
    description:
      "Un atlas de anatomía fotográfica con imágenes de cadáveres, ofreciendo una visión realista de la estructura humana.",
    image: "atlasDeAnatomiaHumanaRohen.jpg",
    year: 2016,
    edition: "8ª Edición",
    stock: 50,
    price: 120.0,
  },
  {
    title:
      "Bontrager. Manual de Posiciones Radiológicas y Anatomía Relacionada",
    author: "Kenneth L. Bontrager, John P. Lampignano",
    category: "Radiología",
    description:
      "Un manual esencial y completo que describe las técnicas de posicionamiento radiológico con ilustraciones detalladas y anatomía correlacionada para obtener imágenes diagnósticas de alta calidad.",
    image: "radiologiaBontrager.jpeg",
    year: 2021,
    edition: "10ª Edición",
    stock: 45,
    price: 115.0,
  },
];

Book.insertMany(books)
  .then(() => {
    console.log("Libros insertados correctamente");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error al insertar libros:", err);
    mongoose.connection.close();
  });
