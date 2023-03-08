import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Image, Stack, Heading, Text, CardBody, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({books}) => {

  const {id} = useParams()

  const id_filter = books.filter((book) => book.id == id)

  return (
    <>
      {
        id_filter.map((book) => {
          return (
          <div key={book.id}>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            className='cardItem_detail'
            backgroundColor='#fcf3cf'
            >
              <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '500px' }}
              src={book.image}
              alt=''
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{book.title}</Heading>
                  <Text py='2'>{book.description}</Text>
                  <br />
                  <Text as='b'>Categoría:</Text> {book.category}
                  <br />
                  <Text as='b'>Edición:</Text> {book.edition}
                  <br />
                  <Text as='b'>Año:</Text> {book.year}
                  <br />
                  <Text as='b'>Autor:</Text> {book.author}
                  <br />
                  <br />
                  <Text color='blue.600' fontSize='2xl'>${book.price}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount stock={book.stock}/>
                </CardFooter>
              </Stack>
            </Card>
          </div>
          )
        })
      }
    </>
  )
}

export default ItemDetail