import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { Button, Image } from '@chakra-ui/react'
import img_cardiologia from '../assets/cardiologia.png'
import img_diagnostico_por_imagenes from '../assets/diagnosticoPorImagenes.png'
import img_gastroenterología from '../assets/gastroenterologia.png'
import img_oftalmologia from '../assets/oftalmologia.png'

const NavBar = () => {
  return (
    <div className='NavBarContainer'>
        <h1 className='brand'>MEDICINA BOOKS</h1>
        <Menu>
            <MenuButton as={Button} colorScheme='yellow'>Categorías</MenuButton>
            <MenuList>
                <MenuItem minH='48px'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_cardiologia}
                    alt='categoría cardiología'
                    mr='12px'
                    />
                    <span>Cardiología</span>
                </MenuItem>
                <MenuItem minH='40px'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_diagnostico_por_imagenes}
                    alt='categoría diagnóstico por imágenes'
                    mr='12px'
                    />
                    <span>Diagnóstico por imágenes</span>
                </MenuItem>
                <MenuItem minH='40px'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_gastroenterología}
                    alt='categoría gastroenterología'
                    mr='12px'
                    />
                    <span>Gastroenterología</span>
                </MenuItem>
                <MenuItem minH='40px'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_oftalmologia}
                    alt='categoría oftalmología'
                    mr='12px'
                    />
                    <span>Oftalmología</span>
                </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget/>
    </div>
  )
}

export default NavBar