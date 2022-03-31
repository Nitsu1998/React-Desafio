import NavBar from "./NavBar";
import CartWidget from "./CartWidget.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { context } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  
  const { user, logOut } = useContext(context);
  const navigate = useNavigate()
  
  useEffect ( ()=> {
    navigate("/")
  },[user])

  return (
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
            {user?.displayName !== undefined ? (
              <div className="userName">
                {<Link to="/User"><h4>{user.displayName}</h4></Link>}
                <button onClick={logOut} title="Log out"><FontAwesomeIcon icon={faRightFromBracket}/></button>
              </div>
            ) : (
              <div>
                <Link to="/SignIn">
                  <button>SING IN</button>
                </Link>
                <Link to="/SignUp">
                  <button>SING UP</button>
                </Link>
              </div>
            )}
          </div>
        </div>
          <CartWidget />
      </header>
  );
}
