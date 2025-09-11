import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [books, setBooks] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  //Importamos información de la base de datos
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/api/books")
      .then((res) => res.json())
      .then((data) => {
        const booksWithId = data.map((book) => ({
          ...book,
          id: book._id || book.id,
        }));
        setBooks(booksWithId);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  //Filtrado de categorías
  const categoryFilter = books.filter((book) => book.category === category);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {category ? (
        <ItemList books={categoryFilter} />
      ) : (
        <ItemList books={books} />
      )}
    </div>
  );
};

export default ItemListContainer;
