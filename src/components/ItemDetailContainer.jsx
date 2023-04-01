import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [book, setBook] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    const db = getFirestore()

    const oneItem = doc(db, "libros",  `${id}`)

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        setBook({id:snapshot.id, ...snapshot.data()})
      }
    })
  }, [])

  return (
    <div className='cardContainer_detail'>
      <ItemDetail book={book}/>
    </div>
  )
}

export default ItemDetailContainer