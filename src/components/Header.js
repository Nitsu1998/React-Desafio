import NavBar from "./NavBar";
import CartWidget from "./CartWidget.js";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="header">
        <div id="logo">
          <Link to="/">
            <img src="/img/logo.png" alt="" />
          </Link>
        </div>
        <div id="title">
          <Link to="/">
            <h1>RICK & MORTY</h1>
          </Link>
        </div>
        <NavBar />
        <div id="sign">
          <SignIn />
          <SignUp />
          <NavLink to="/Cart">
            <CartWidget />
          </NavLink>
        </div>
      </header>
    </>
  );
}
