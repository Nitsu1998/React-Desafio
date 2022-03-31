import ItemCount from "./ItemCount";
import { useContext } from "react";
import { contextCart } from "../context/CartContext"

export default function ItemDetail({ product }) {
  
  const {addProduct} = useContext(contextCart)
  const {id, name, price, status, species, gender, stock, place, image } = product;

  const onAdd = (amount) => {
    addProduct(product, amount)
  };

  return (
      <div className="detailContainer">
        <div className="detail">
          <img src={image} width="425" height="425" alt="" />
          <div className="detailInfo">
            <h2>{name}</h2>
            <ul>
              <h4>Information</h4>
              <li>Status: <span>{status}</span><span className={("" + status).toLowerCase()}></span></li>
              <li>Species: <span>{species}</span></li>
              <li>Gender: <span>{gender}</span></li>
              <li>Last known location : <span>{place}</span></li>
            </ul>
            <h4>
              Price: <span>{price}ETH</span>
            </h4>
            <ItemCount id={id} initial={1} stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
  );
}