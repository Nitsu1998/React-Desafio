import { Link } from "react-router-dom";

export default function Item({ product }) {
  
  const { id, name, price, image } = product;

  return (
    <>
      <div id={`product:${id}`} className="scale">
        <img src={image} width="250" height="250" alt="" />
        <div className="infoProduct">
          <h3>{name}</h3>
          <h5>Price: {price}ETH</h5>
          <Link to={`/item/${id}`}>
            <button>More Info</button>
          </Link>
        </div>
      </div>
    </>
  );
}
