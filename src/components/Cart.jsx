import React, { useContext, useEffect, useState } from "react";
import { Col, Divider, Result, Row, Typography } from "antd";

import Product from "./Product";

import { CartContext } from "../contexts/CartContextWrapper";

const { Text } = Typography;

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, current) => acc + Number(current.price), 0)
    );

    return () => {};
  }, [cart]);

  return (
    <>
      {cart.length ? (
        <>
          <Row gutter={[16, 16]}>
            {cart.map((productItem) => (
              <Product
                productData={productItem}
                cart={cart}
                setCart={setCart}
                key={productItem.id}
              />
            ))}
          </Row>
          <Divider
            orientation="right"
            orientationMargin={50}
            style={{ marginBottom: "0px" }}
          >
            Cart Total
          </Divider>
          <Col span={24} style={{ textAlign: "end", paddingRight: "45px" }}>
            <Text style={{ fontSize: "24px" }} code>
              {totalPrice}€
            </Text>
          </Col>
        </>
      ) : (
        <Result title="Your cart is empty, start to add new product to cart" />
      )}
    </>
  );
};

export default Cart;
