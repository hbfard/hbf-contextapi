import { Row } from "antd";
import React from "react";
import Product from "./Product";

const Products = ({ productsData }) => {
  return (
    <Row gutter={[16, 16]}>
      {productsData?.map((productItem) => (
        <Product productData={productItem} key={productItem.id} />
      ))}
    </Row>
  );
};

export default Products;
