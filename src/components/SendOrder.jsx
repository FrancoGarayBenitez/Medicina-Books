import React from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SendOrder = ({cart, clearCart}) => {
    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [receivedId, setReceivedId] = useState(false)

    //Lógica para crear una colección en la base de datos
    const db = getFirestore()
      
    const handleSubmit = (e) => {
          e.preventDefault()

          addDoc(orderCollection, order).then(({id}) => {
            setOrderId(id)
            setReceivedId(true)
          })
    }

    //Información del documento a enviar a la db
    const order = {
        buyer: {name, email},
        items: cart.map((book) => ({id: book.id, title:book.title, price:book.price}))
    }

    const orderCollection = collection(db, "orden")


  return (
    <div>
        <form onSubmit={handleSubmit} className='formOrderContainer'>
          <h4>Formulario de compra</h4>
            <input type="text" placeholder="Nombre y apellido" onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <Button type="submit" colorScheme='gray'>Terminar compra</Button>
        </form>
        <div className='orderNumber'>
        <Text fontSize='2xl'>Número de orden: {orderId}</Text>

        {/* Validamos para que al recibir el Id de compra aparezca el botón de volver al inicio y se vacíe el carrito */}
        {
          receivedId ?
          <Link to="/">
          <Button type="submit" mt={2} colorScheme='green' onClick={() => clearCart()}>Volver al inicio</Button>
          </Link>
          : 
          ""
        }       
        </div>
    </div>
  )
}

export default SendOrder