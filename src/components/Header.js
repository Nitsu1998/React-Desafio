import NavBar from "./NavBar";
import CartWidget from "./CartWidget.js";
import logo from "../img/logo.png"

export default function Header() {
  return (
    <>
      <header id="header">
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <div id="title">
          <h1>RICK & MORTY</h1>
        </div>
        <NavBar />
        <div id="sign">
          <button>SIGN IN</button>
          <button>SIGN UP</button>
          <CartWidget />
        </div>
      </header>
    </>
  );
}
