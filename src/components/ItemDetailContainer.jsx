import React, { useEffect, useState } from 'react'
import Data from "../data.json"
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  const [data, setData] = useState([])

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data)
      },1000)
    })
  }

  useEffect(() => {
    getData().then((data) => setData(data))
  },[])

  return (
    <div className='cardContainer_detail'>
      <ItemDetail books={data}/>
    </div>
  )
}

export default ItemDetailContainer