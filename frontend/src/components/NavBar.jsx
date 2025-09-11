import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <Link to="/">
        <h1 className="brand">MEDICINA BOOKS</h1>
      </Link>
      <Link to="/catalogue">
        <Button colorScheme="yellow" className="buttons">
          Catálogo
        </Button>
      </Link>
      <Menu>
        <MenuButton as={Button} colorScheme="yellow" className="buttons">
          Categorías
        </MenuButton>
        <MenuList backgroundColor="#f9e79f">
          <Link to={`/category/${"Anatomía"}`}>
            <MenuItem minH="40px" backgroundColor="#f9e79f">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={"/assets/anatomia.png"}
                alt="categoría anatomía"
                mr="12px"
              />
              <span>Anatomía</span>
            </MenuItem>
          </Link>
          <Link to={`/category/${"Biología"}`}>
            <MenuItem minH="40px" backgroundColor="#f9e79f">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={"/assets/biologia.png"}
                alt="categoría biología"
                mr="12px"
              />
              <span>Biología</span>
            </MenuItem>
          </Link>
          <Link to={`/category/${"Cardiología"}`}>
            <MenuItem minH="48px" backgroundColor="#f9e79f">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={"/assets/cardiologia.png"}
                alt="categoría cardiología"
                mr="12px"
              />
              <span>Cardiología</span>
            </MenuItem>
          </Link>
          <Link to={`/category/${"Radiología"}`}>
            <MenuItem minH="40px" backgroundColor="#f9e79f">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={"/assets/diagnosticoPorImagenes.png"}
                alt="categoría diagnóstico por imágenes"
                mr="12px"
              />
              <span>Radiología</span>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
