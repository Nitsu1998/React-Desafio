import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { context } from "../context/UserContext";
import { db } from "../firebase/Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function User() {
  const { user, deleteAccount } = useContext(context);
  const [orders, setOrders] = useState([])
  const [productsOrder, setProductsOrder] = useState()

  useEffect(()=>{
      const getOrders = query(collection(db, "orders"), where("buyer.email", "==", user.email))
      getDocs(getOrders)
      .then((res)=>{
        setOrders(res.docs.map(order=>({
          id: order.id,
          ...order.data(),
        })))
      })
      .catch(()=>[
        console.log("Error")
      ])
  },[user])

  const showOrder = (id) => {
    const order = orders.find(ord => ord.id === id)
    setProductsOrder(order)
  }

  const closePurchaseCodeResume = () => {
    setProductsOrder()
  }

  return (
    <>
      {user?.displayName !== undefined ? (
        <div className="createdAccount">
          <h2>Account Information</h2>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Account created: {user.metadata.creationTime}</p>
          <button className="deleteAccount" onClick={deleteAccount}>Delete Account</button>
          <div className="purchaseProductContainer">
          {productsOrder !== undefined ? <div>
            <h2>Purchase Code</h2>
            <h4>{productsOrder.id}</h4>
            <h2>Resume Purchase</h2>
            {productsOrder.products.map((order, index)=>(
                <div className="purchaseResume" key={index}>
                  <img src={order.image} alt="" width="50px" />
                  <p>{order.name} (x{order.quantity})</p>
                  <p> {(order.price * order.quantity).toFixed(2)} ETH</p>
                </div>
              ))}
              <h3>Total: {productsOrder.total}</h3>
              <button onClick={closePurchaseCodeResume}>Close Resume</button>
          </div> : <div>
            <h2>My Purchase Codes</h2>
            {orders.map((order,index)=>(
              <div key={index}>
                <span>{order.id}</span>
                <button><FontAwesomeIcon icon={faCircleInfo} onClick={()=>{showOrder(order.id)}}/></button>
              </div>
              ))}
          </div>
          }
          </div>
        </div>
      ) : null}
    </>
  );
}