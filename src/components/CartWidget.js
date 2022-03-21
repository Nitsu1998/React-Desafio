import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { context } from "../context/CartContext";

export default function CartWidget() {
  const cartContext = useContext(context);
  const productsAmount = cartContext.productsAmount;

  return (
    <>
      <div id="cart">
        <NavLink to="/Cart">
          <button>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </button>
        </NavLink>
      </div>
      <div id="cartNumber">{productsAmount !== 0 ? productsAmount : null}</div>
    </>
  );
}
