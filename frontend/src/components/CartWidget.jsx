import React, { useContext } from "react";

import { CartContext } from "../context/ShoppingCartPovider";

const CartWidget = () => {
  //Recibo del context la cantidad total de productos seleccionados
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <img src={"/assets/carts.png"} alt="Carrito" />
      <span>{totalQuantity || ""}</span>
    </div>
  );
};

export default CartWidget;
