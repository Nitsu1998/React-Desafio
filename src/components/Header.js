import NavBar from "./NavBar";
import CartWidget from "./CartWidget.js";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
        <SignIn />
        <SignUp />
        <CartWidget />
        </div>
      </header>
    </>
  );
}
