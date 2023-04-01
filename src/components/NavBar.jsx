import React, { useContext } from 'react'
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
import img_anatomia from '../assets/anatomia.png'
import img_biologia from '../assets/biologia.png'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (
    <div className='NavBarContainer'>
        <Link to="/">
        <h1 className='brand'>MEDICINA BOOKS</h1>
        </Link>
        <Link to="/catalogue">
        <Button colorScheme='yellow' className="buttons">Catálogo</Button>
        </Link>
        <Menu>
            <MenuButton as={Button} colorScheme='yellow' className="buttons">Categorías</MenuButton>
            <MenuList backgroundColor='#f9e79f'>
                <Link to={`/category/${"Anatomía"}`} >
                <MenuItem minH='40px' backgroundColor='#f9e79f'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_anatomia}
                    alt='categoría anatomía'
                    mr='12px'
                    />
                    <span>Anatomía</span>
                </MenuItem>
                </Link>
                <Link to={`/category/${"Biología"}`}>
                <MenuItem minH='40px' backgroundColor='#f9e79f'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_biologia}
                    alt='categoría biología'
                    mr='12px'
                    />
                    <span>Biología</span>
                </MenuItem>
                </Link>
                <Link to={`/category/${"Cardiología"}`}>
                <MenuItem minH='48px' backgroundColor='#f9e79f'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_cardiologia}
                    alt='categoría cardiología'
                    mr='12px'
                    />
                    <span>Cardiología</span>  
                </MenuItem>
                </Link>
                <Link to={`/category/${"Radiología"}`}>
                <MenuItem minH='40px' backgroundColor='#f9e79f'>
                    <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={img_diagnostico_por_imagenes}
                    alt='categoría diagnóstico por imágenes'
                    mr='12px'
                    />
                    <span>Radiología</span>
                </MenuItem>
                </Link>
            </MenuList>
        </Menu>
        <Link to="/cart">
        <CartWidget/>
        </Link>
    </div>
  )
}

export default NavBar