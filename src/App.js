import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

import { getProduct } from "./services/Products";
import CartContextWrapper from "./contexts/CartContextWrapper";

const products = [...Array(10)].map(() => getProduct());

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <CartContextWrapper>
          <AppHeader />
          <AppContent productsData={products} />
          <AppFooter />
        </CartContextWrapper>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
