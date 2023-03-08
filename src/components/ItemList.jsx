import React from 'react'
import Item from './Item';

const ItemList = ({books}) => {
  return (
    <div className="cardsContainer">
      {
        books.map((book) => {
          return (
            <Item
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            img={book.image}
            price={book.price}
            />
          )
        })
      }
    </div>
  )
}

export default ItemList