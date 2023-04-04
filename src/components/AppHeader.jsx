import { Badge, Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import styles from "./AppHeader.module.css";

const { Header } = Layout;

const AppHeader = () => {
  const items = [
    {
      label: "Products",
      key: "products",
      target: "/",
    },
    {
      label: (
        <>
          Cart{" "}
          <Badge
            count={0}
            size="small"
            offset={[8, 0]}
            className={styles.ant_badge_customized}
          >
            <ShoppingCartOutlined style={{ fontSize: 16 }} />
          </Badge>
        </>
      ),
      key: "card",
      target: "/cart",
    },
  ];

  const navigate = useNavigate();

  const handleClick = ({ key }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div
        style={{
          float: "left",
          width: 120,
          height: 31,
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["products"]}
        items={items}
        onClick={handleClick}
      />
    </Header>
  );
};

export default AppHeader;
