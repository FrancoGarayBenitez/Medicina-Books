import React from 'react'
import { Text, Box, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome">
<Box maxW='32rem'>
  <Heading mb={4}>Bienvenidos a Medicina Books</Heading>
  <Text fontSize='xl'>
    Explorá nuestro tienda digital de libros para estudiantes y profesionales de la salud
  </Text>
  <Link to="/catalogue">
  <Button size='lg' colorScheme='yellow' mt='24px'>Comenzar</Button>
  </Link>
</Box>
    </div> 
  )
}

export default Welcome