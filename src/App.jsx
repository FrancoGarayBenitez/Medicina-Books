import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ShoppingCartPovider from './context/ShoppingCartPovider'

const App = () => {
  return (
  <ChakraProvider>
    
    <BrowserRouter>
    <ShoppingCartPovider>
    <NavBar/>

    <Routes>
      <Route exact path="/" element={<Welcome/>}/>
      <Route exact path="/catalogue" element={<ItemListContainer/>}/>
      <Route exact path="/category/:category" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </ShoppingCartPovider>
    </BrowserRouter>

  </ChakraProvider>
  )
}

export default App