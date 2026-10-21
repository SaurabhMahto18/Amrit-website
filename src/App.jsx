
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import FAQ from "./pages/FAQ";
import CartPage from "./pages/CartPage";
import Certificates from "./pages/Certificates";
import LabReports from "./pages/LabReports";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

import ProductsPage from "./components/ProductsPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main pages */}
          <Route index element={<Home />} />

          {/* Products and product details */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />

          {/* Customer support and information */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />

          {/* Shopping */}
          <Route path="cart" element={<CartPage />} />

          {/* Services */}
          <Route path="subscribe" element={<Subscription />} />

          {/* Trust and legal information */}
          <Route path="certificates" element={<Certificates />} />
          <Route path="lab-reports" element={<LabReports />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* All unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
