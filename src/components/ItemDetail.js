import { toast } from "react-toastify";
import ItemCount from "./ItemCount";

export default function ItemDetail({product}) {

  const { name, price, status, species, gender, stock, place, image } = product;

  const onAdd = (amount) => {
    const selected = amount
    toast.success(`Added ${name} (x${selected}) to cart`, {autoClose: 2500})
  }

  return (
    <>
      <div id="detailContainer">
        <div id="detail">
          <img src={image} width="400" height="400" alt="" />
          <div id="detailInfo">
            <h2>{name}</h2>
            <ul>
              <h4>Information</h4>
              <li>
                Status: <span>{status}</span> <span id={status === "Alive" ? "alive" : "dead"}></span>
              </li>
              <li>
                Species: <span>{species}</span>
              </li>
              <li>
                Gender: <span>{gender}</span>
              </li>
              <li>
                Last known location : <span>{place}</span>
              </li>
            </ul>
            <h4>Price: <span>{price}ETH</span></h4>
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
}
