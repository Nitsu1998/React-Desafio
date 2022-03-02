import NavBar from "./NavBar";
import CartWidget from "./CartWidget.js";

export default function Header() {
  return (
    <>
      <header id="header">
        <div id="logo">
          <img src='/img/logo.png' alt="" />
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
