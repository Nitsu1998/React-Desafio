export default function Item({item}) {
  
  const {name, image} = item

  return (
    <>
      <div id="product">
        <img src={image} width="250" height="250" alt="" />
        <div id="infoProduct">
          <h3>{name}</h3>
          <h5>Price: {Math.random()}ETH</h5>
          <button>More Info</button>
        </div>
      </div>
    </>
  );
}
