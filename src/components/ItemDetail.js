import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ItemDetail({ product }) {
  const { name, price, status, species, gender, stock, place, image } = product;
  const [selected, setSelected] = useState();

  const onAdd = (amount) => {
    setSelected(amount);
  };
  if (selected !== undefined) {
    toast.success(`Added ${name} (x${selected}) to cart`, { autoClose: 3000 });
  }

  return (
    <>
        <NavLink to="/">
          <button id="goBack"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
        </NavLink>
      <div id="detailContainer">
        <div id="detail">
          <img src={image} width="425" height="425" alt="" />
          <div id="detailInfo">
            <h2>{name}</h2>
            <ul>
              <h4>Information</h4>
              <li>
                Status: <span>{status}</span>{" "}
                <span id={status === "Alive" ? "alive" : "dead"}></span>
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
            <h4>
              Price: <span>{price}ETH</span>
            </h4>
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            {selected !== undefined ? (
              <div id="detailInfoCart">
              <NavLink to="/Cart">
                <button>Go to Cart</button>
              </NavLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
