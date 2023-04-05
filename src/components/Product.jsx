import { Button, Card, Col } from "antd";
const { Meta } = Card;

const Product = () => {
  return (
    <>
      <Col span={8}>
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta title={`230€`} description="Product" />
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
