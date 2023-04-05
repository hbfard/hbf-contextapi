import { Row } from "antd";
import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <Row gutter={[16, 16]}>
      <Product />
    </Row>
  );
};

export default Products;
