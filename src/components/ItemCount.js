import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContext";

export default function ItemCount({ id, initial, stock, onAdd }) {
  const [amount, setAmount] = useState(initial);

  const { productsCart } = useContext(context);

  const productCart = productsCart.find((p) => p.id === id);

  const stockAvailable = stock - (productCart?.quantity || 0);

  const decrease = () => {
    if (amount > initial) {
      setAmount(amount - 1);
    }
  };

  const increase = () => {
    if (amount < stockAvailable) {
      setAmount(amount + 1);
    }
  };

  const addCart = () => {
    onAdd(amount);
    setAmount(initial);
  };

  return (
    <>
      {stockAvailable !== 0 ? (
        <div id="productCounter">
          <div id="counter">
            <button onClick={decrease}>-</button>
            <p id="amount">{amount}</p>
            <button onClick={increase}>+</button>
          </div>
          <p id="stockAvailable">Available: {stockAvailable}</p>
          <div id="addCart">
            <Link to="/Cart">
              <button onClick={addCart}>Add to Cart</button>
            </Link>
          </div>
        </div>
      ) : (
        <div id="noStock">
          <p>You already have all the available stock of this product in the cart</p>
          <Link to="/Cart">
          <button>Go To Cart</button>
          </Link>
        </div>
      )}
    </>
  );
}
