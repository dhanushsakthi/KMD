// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import AboutUs from "./components/About";
import TermsAndConditions from "./components/Terms";
import ShippingPolicy from "./components/Shipping";
import ReturnPolicy from "./components/Return";
import PrivacyPolicy from "./components/Privacy";
import Cart from "./pages/Cart";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20">
      <Header />

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* fallback to avoid blank screen */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
