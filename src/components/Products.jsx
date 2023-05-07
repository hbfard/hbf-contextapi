import React from "react";
import Product from "./Product";
import { Row } from "antd";

const Products = ({ productsData, cart, setCart }) => {
  return (
    <Row gutter={[16, 16]}>
      {productsData?.map((productItem) => (
        <Product
          productData={productItem}
          cart={cart}
          setCart={setCart}
          key={productItem.id}
        />
      ))}
    </Row>
  );
};

export default Products;
