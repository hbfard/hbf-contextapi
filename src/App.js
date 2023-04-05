import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

import { getProduct } from "./services/Products";

const products = [...Array(10)].map(() => getProduct());

console.log(products);

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
