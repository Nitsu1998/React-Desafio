import Item from "./Item";

export default function ItemList({products}) {

  return (
    <>
      <div id="productsContainer">
        {products.map((product,index) => (
          <Item key={index} product={product}/>
        ))}
      </div>
    </>
  );
}
