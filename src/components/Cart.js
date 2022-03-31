import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { contextCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {

  const { productsCart, productsAmount, removeProduct, clearCart, total, goCheckout } = useContext(contextCart);
  
  return (
      <div className="cartContainer">
        <div className="cartInfo">
          <p>Product</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {productsCart.map((product) => (
          <div id={`product:${product.id}`} className="cartProduct" key={product.id}>
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
        
        <div className="cartOptionsContainer">
          {productsAmount !== 0 ? (
            <>
            <div className="cartOptions">
              <div>
                <p>Total: {total.toFixed(2)} ETH</p>
              </div>
              <div>
                <button onClick={clearCart}>CLEAR CART</button>
                <Link to="/Checkout" onClick={goCheckout}><button>TO BUY</button></Link>
              </div>
            </div>
            </>
          ) : <div className="cartEmpty"><Link to="/"><p>No products added to the cart.</p></Link></div>}
        </div>
      </div>
  );
}