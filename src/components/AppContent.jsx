import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import Cart from "./Cart";
import Products from "./Products";
import AppBreadcrumb from "./AppBreadcrumb";

const { Content } = Layout;

const AppContent = ({ productsData, cart, setCart }) => {
  return (
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
      }}
    >
      <AppBreadcrumb />
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: "rgba(255, 255, 255)",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Products
                productsData={productsData}
                cart={cart}
                setCart={setCart}
              />
            }
            exact
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Content>
  );
};

export default AppContent;
