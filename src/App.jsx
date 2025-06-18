import { BrowserRouter as ReactRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ProductPage from "./components/ProductPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <ReactRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </ReactRouter>
  );
}

export default App;
