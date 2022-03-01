import prueba from "../img/rickTrono.png";
import { useState } from "react";

export default function ItemCount(props) {
  const [amount, setAmount] = useState(props.initial);

  const decrease = () => {
    if (amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const increase = () => {
    if (amount !== props.stock) {
      setAmount(amount + 1);
    }
  };

  const meOnAdd = () => {
    console.log("Se agrego %d items al carrito", amount);
    setAmount(props.initial);
  };

  return (
    <>
      <div id="item">
        <img src={prueba} alt="" />
        <div id="product">
          <button onClick={decrease}>-</button>
          <p id="amount">{amount}</p>
          <button onClick={increase}>+</button>
        </div>
        <p id="stockAvailable">Available: {props.stock}</p>
        <div id="addCart">
          <button onClick={meOnAdd}>Add to cart</button>
        </div>
      </div>
    </>
  );
}
