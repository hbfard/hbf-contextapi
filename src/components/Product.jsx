import { Button, Card, Col } from "antd";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContextWrapper";

const { Meta } = Card;

const Product = ({ productData }) => {
  const { cart, dispatch } = useContext(CartContext);
  const { title, image, price } = productData;

  const handleAddClicked = () => {
    dispatch({ type: "add_to_cart", payload: productData });
  };

  const handleRemoveClicked = () => {
    dispatch({ type: "remove_from_cart", payload: productData });
  };

  return (
    <>
      <Col span={8}>
        <Card cover={<img alt={title} src={image} />}>
          <Meta title={`${price}€`} description={title} />
          <hr style={{ margin: "20px 0" }} />
          {cart.includes(productData) ? (
            <Button type="primary" block danger onClick={handleRemoveClicked}>
              Remove
            </Button>
          ) : (
            <Button type="primary" block onClick={handleAddClicked}>
              Add to cart
            </Button>
          )}
        </Card>
      </Col>
    </>
  );
};

export default Product;
