import prueba from "../img/rickTrono.png";
import { useState } from "react";

export default function ItemCount(props) {
  const [cantidad, setCantidad] = useState(props.initial);

  const disminuir = () => {
    if (cantidad !== 1) {
      setCantidad(cantidad - 1);
    }
  };

  const aumentar = () => {
    if (cantidad !== props.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const meOnAdd = () => {
    setCantidad(props.initial);
  };

  return (
    <>
      <div id="item">
        <img src={prueba} alt="" />
        <div id="producto">
          <button onClick={disminuir}>-</button>
          <p id="cantidad">{cantidad}</p>
          <button onClick={aumentar}>+</button>
        </div>
        <p id="disponibles">Available: {props.stock}</p>
        <div id="agregarCarrito">
          <button onClick={meOnAdd}>Add to cart</button>
        </div>
      </div>
    </>
  );
}
