import { Button, Card, Col } from "antd";
const { Meta } = Card;

const Product = ({ productData }) => {
  const { title, image, price } = productData;

  return (
    <>
      <Col span={8}>
        <Card cover={<img alt={title} src={image} />}>
          <Meta title={`${price}€`} description={title} />
          <hr style={{ margin: "20px 0" }} />
          <Button type="primary" block>
            Add to cart
          </Button>
          <Button type="primary" block danger>
            Remove
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Product;
