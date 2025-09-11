import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook({
          ...data,
          id: data._id || data.id,
        });
      });
  }, [id]);

  return (
    <div className="cardContainer_detail">
      <ItemDetail book={book} />
    </div>
  );
};

export default ItemDetailContainer;
