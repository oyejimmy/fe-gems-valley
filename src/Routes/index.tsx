import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Contact from "../containers/Contact";
import AboutUs from "../containers/About";
import Home from "../containers/Home";
import Products from "../containers/Products";
import ProductDetails from "../containers/Products/components/ProductDetail";
import ProductCategory from "../containers/Products/components/ProductCategory";

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productName" element={<ProductCategory />} />
        <Route
          path="/products/:productName/:gemId"
          element={<ProductDetails />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
