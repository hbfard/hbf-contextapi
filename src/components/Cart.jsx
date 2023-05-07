import React from "react";

import Product from "./Product";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      {cart?.map((productItem) => (
        <Product
          productData={productItem}
          cart={cart}
          setCart={setCart}
          key={productItem.id}
        />
      ))}
    </>
  );
};

export default Cart;
