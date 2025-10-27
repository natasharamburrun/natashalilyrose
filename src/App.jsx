import { BrowserRouter as ReactRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ProductPage from "./components/ProductPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Cart from "./components/Cart";
import PaymentCancel from "./Pages/PaymentCancel";
import PaymentSuccess from "./Pages/PaymentSuccess";
import AnnouncementBanner from "./Pages/AnnouncementBanner";

import "./index.css";

function App() {
  return (
    <ReactRouter>
      <AnnouncementBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ReactRouter>
  );
}

export default App;
