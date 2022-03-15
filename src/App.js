import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailCointainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/cart" element={<CartWidget />}/>
          <Route path="/species/:specie" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailCointainer/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}