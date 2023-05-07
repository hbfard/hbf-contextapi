import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import Cart from "./Cart";
import Products from "./Products";
import AppBreadcrumb from "./AppBreadcrumb";

const { Content } = Layout;

const AppContent = ({ productsData }) => {
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
            element={<Products productsData={productsData} />}
            exact
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Content>
  );
};

export default AppContent;
