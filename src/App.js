import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

import { getProduct } from "./services/Products";
import { useState } from "react";

const products = [...Array(10)].map(() => getProduct());

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Layout>
      <BrowserRouter>
        <AppHeader cart={cart} />
        <AppContent productsData={products} cart={cart} setCart={setCart} />
        <AppFooter />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
