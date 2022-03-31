import SignUp from "./SignUp";
import { contextCart } from "../context/CartContext";
import { context } from "../context/UserContext";
import { useContext, useState } from "react";
import { db } from "../firebase/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Checkout() {
  const { productsCart, total, clearCart } = useContext(contextCart);
  const { user } = useContext(context);
  const [purchaseCode, setPurchaseCode] = useState("")

  const confirmPurchase = () => {
    const order = {
      buyer: {
        name: user.displayName,
        email: user.email,
      },
      products: productsCart,
      date: serverTimestamp(),
      total: `${total} ETH`,
    };

    const addOrder = addDoc(collection(db, "orders"), order);

    addOrder.then((res) => {
      clearCart();
      setPurchaseCode(res.id);
    });
  };

  return (
    <>
      {user?.displayName === undefined ? (
        <div>
          <SignUp />
        </div>
      ) : (
        <div className="purchase">
          <h2>Customer's information</h2>
          <ul>
            <li>Username: <span>{user.displayName}</span></li>
            <li>Email: <span>{user.email}</span></li>
          </ul>
          {total === 0 ? (
            <div>
              <h2>Your purchase code:</h2>
              <h3 className="purchaseCode">{purchaseCode}</h3>
            </div>
          ) : (
            <div className="purchaseProductContainer">
              <h2>Selected products</h2>
              {productsCart.map((product) => (
                <div
                  id={`product:${product.id}`}
                  className="purchaseProduct"
                  key={product.id}
                >
                  <img src={product.image} alt="" width="50px" />
                  <p>{product.name} (x{product.quantity})</p>
                  <p> {(product.price * product.quantity).toFixed(2)} ETH</p>
                </div>
              ))}
              <h3>Total: {total.toFixed(2)} ETH</h3>
              <button onClick={confirmPurchase}>Confirm Purchase</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
