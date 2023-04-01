import React, { useContext } from 'react'
import { Heading, Card, Text, Image, Stack, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { DeleteIcon } from "@chakra-ui/icons"
import { CartContext } from '../context/ShoppingCartPovider'
import { Link } from 'react-router-dom'
import SendOrder from './SendOrder'

const Cart = () => {
  const {cart, setCart} = useContext(CartContext)

  //Limpiar carrito
  const clearCart = () => setCart([])

  //Eliminar un producto del carrito
  const removeItem = (id) => setCart(cart.filter(book => book.id !== id))

  //Precio total
  const totalPrice = () => {
    return cart.reduce((acc, currItem) => acc + (currItem.quantity * currItem.price), 0)
  }

  if (cart.length === 0) {
    return (
      <div className='messageCartEmpty'>
        <Heading textAlign="center" mb={4} fontFamily={"Maven Pro, sans-serif"}>No ha seleccionado ningún libro para comprar</Heading>
        <Link to={"/catalogue"}>
        <Button colorScheme='gray' className="buttons">Ir al catálogo</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className='cartContainerItems'>
    {
      cart.map((book) => {
        return(
          <div key={book.id}>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor='#fcf3cf'
            className='card_cartItem'
            >
              <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={book.image}
              alt=''
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{book.title}</Heading>
                  <br />
                  <Text as='b'>Cantidad: </Text>{book.quantity}
                  <br />
                  <Text as='b'>Precio por unidad: </Text>${book.price}
                  <br />
                  <Text as='b'>Precio subtotal: </Text>${book.price * book.quantity}
                </CardBody>
                <CardFooter>
                  <Button colorScheme='#f9e79f'>
                  <DeleteIcon w={6} h={6} color='red.500' onClick={() => removeItem(book.id)}/>
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </div>
        )
      })
    }

    <div className='precioTotal_VaciarCarrito'>
    <Heading as='h3' size='lg' m={4} fontFamily={"Maven Pro, sans-serif"}>Precio total: ${totalPrice()}</Heading>
    <Button colorScheme='gray' variant='outline' onClick={clearCart}>Vaciar carrito</Button>
    </div>

    <div>
      <SendOrder cart={cart} clearCart={clearCart}/>
    </div>

    </div>
  )
}

export default Cart