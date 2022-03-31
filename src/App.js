import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailCointainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./components/User";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <main id="main">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Species/:specie" element={<ItemListContainer />} />
              <Route path="/Status/:status" element={<ItemListContainer />} />
              <Route path="/Item/:id" element={<ItemDetailCointainer />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/User" element={<User />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  );
}
