import React, { useState } from 'react'
import { Tooltip, Button, ButtonGroup, IconButton, Text } from '@chakra-ui/react'
import { AddIcon, MinusIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const ItemCount = ({stock}) => {
  const [count, setCount] = useState(1)

  const adicion = () => {
    setCount(count + 1)
  }
  const sustraccion = () => {
    setCount(count - 1)
  }
  
  return (
  <div className='cardFooter_detail'>
    <div>
    {
      count < 1 ?
      (
        <Tooltip label='Se requiere un stock mínimo' fontSize='md'>
          <IconButton 
          backgroundColor='black' 
          w={4} h={8} mr={2}
          color="white" 
          aria-label='sustraccion' 
          icon={<MinusIcon />}
          isDisabled 
          />
        </Tooltip>
      ) : (
        <IconButton 
        backgroundColor='black' 
        w={4} h={8} mr={2}
        color="white" 
        aria-label='sustraccion' 
        icon={<MinusIcon />}
        onClick={sustraccion}
        />
      )
    }
      <Text as='b'>{count}</Text>
    {
      count < stock ?
      (
        <IconButton 
        backgroundColor='black' 
        w={4} h={8} ml={2} 
        color="white" 
        aria-label='adicion' 
        icon={<AddIcon />}
        onClick={adicion} 
        />
      ) : (
        <Tooltip label='Stock máximo' fontSize='md'>
          <IconButton 
          backgroundColor='black' 
          w={4} h={8} ml={2} 
          color="white" 
          aria-label='adicion' 
          icon={<AddIcon />}
          isDisabled
          />
        </Tooltip>
      )
    }
    </div>
    <div>
      <Link to="/cart">
        <Button className="buttonAddCart" variant='solid' colorScheme='yellow'>Agregar al carrito </Button>
      </Link>
    </div>
  </div>
  )
}

export default ItemCount