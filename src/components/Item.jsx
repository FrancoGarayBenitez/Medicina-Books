import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Card, 
  CardBody, 
  CardFooter, 
  Button, 
  Image, 
  Stack, 
  Text, 
  Heading, 
  Divider, 
  Center,
} from '@chakra-ui/react'

const Item = ({id,title,category,img,price}) => {
  return (
    <div key={id}>
        <Card maxW='sm' className='cardItem' backgroundColor='#fcf3cf'>
          <CardBody>
            <Center>
            <Image
            src={img}
            alt=''
            borderRadius='lg'
            size='sm'
            className='img_card'
            />
            </Center>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{title}</Heading>
              <Text>Categoría: {category}</Text>
              <Text color='blue.600' fontSize='2xl'>${price}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Link to={`/item/${id}`}>
              <Button variant='solid' colorScheme='yellow'>Detalles</Button>
              </Link>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Item