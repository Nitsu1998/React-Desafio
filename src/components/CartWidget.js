import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contextCart } from "../context/CartContext";

export default function CartWidget() {
  const cartContext = useContext(contextCart);
  const productsAmount = cartContext.productsAmount;

  return (
      <div className="cart">
        <Link to="/Cart">
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </Link>
        <div className="cartNumber">
          {productsAmount !== 0 ? productsAmount : null}
        </div>
      </div>

  );
}
