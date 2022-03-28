import NavBar from "./NavBar";
import CartWidget from "./CartWidget.js";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <>
      <header id="header">
        <div className="logo">
          <Link to="/">
            <img src="/img/logo.png" alt="" />
          </Link>
        </div>
        <div className="title">
          <Link to="/">
            <h1>RICK & MORTY</h1>
          </Link>
        </div>
        <NavBar />
        <div className="headerButtons">
          <div className="sign">
            <SignIn />
            <SignUp />
          </div>
          <CartWidget />
        </div>
      </header>
    </>
  );
}