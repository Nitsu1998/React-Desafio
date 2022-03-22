import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "../context/CartContext";

export default function CartWidget() {
  const cartContext = useContext(context);
  const productsAmount = cartContext.productsAmount;

  return (
    <>
      <div id="cart">
        <Link to="/Cart">
          <button>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
      <div id="cartNumber">{productsAmount !== 0 ? productsAmount : null}</div>
    </>
  );
}
