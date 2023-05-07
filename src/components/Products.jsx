import React from "react";
import Product from "./Product";

const Products = ({ productsData, cart, setCart }) => {
  return (
    <>
      {productsData?.map((productItem) => (
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

export default Products;
