import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { context } from "../context/CartContext";

export default function Cart() {

  const { productsCart, productsAmount, removeProduct, clearCart, total } = useContext(context);

  return (
    <>
      <div id="cartContainer">
        <div id="cartInfo">
          <p>Product</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {productsCart.map((product) => (
          <div id="cartProduct" key={product.id}>
            <img src={product.image} alt="" width="100px" />
            <p>{product.name}</p>
            <p>{product.price} ETH</p>
            <p>{product.quantity}</p>
            <p>{(product.price * product.quantity).toFixed(2)} ETH</p>
            <button onClick={() => removeProduct(product.id)}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div>
        ))}
        
        <div id="cartOptionsContainer">
          {productsAmount !== 0 ? (
            <>
            <div id="cartOptions">
              <div>
                <p>Total: {total.toFixed(2)} ETH</p>
              </div>
              <div>
                <button onClick={clearCart}>CLEAR CART</button>
                <button>TO BUY</button>
              </div>
            </div>
            </>
          ) : <div id="cartEmpty"><p>No products added to the cart.</p></div>}
        </div>
      </div>
    </>
  );
}