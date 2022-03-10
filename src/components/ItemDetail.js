import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  const { name, status, species, gender, image } = product;

  return (
    <>
      <div id="detailContainer">
        <div id="detail">
          <img src={image} width="400" height="400" alt="" />
          <div id="detailInfo">
            <h2>{name}</h2>
            <ul>
              <h3>Information</h3>
              <li>
                Status: <span>{status}</span>
              </li>
              <li>
                Species: <span>{species}</span>
              </li>
              <li>
                Gender: <span>{gender}</span>
              </li>
            </ul>
            <ItemCount initial={1} stock={5} />
          </div>
        </div>
      </div>
    </>
  );
}
