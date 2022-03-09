import Item from "./Item";

export default function ItemList({items}) {
  return (
    <>
      <div id="productsContainer">
        {items.map((item) => (
          <Item item={item}/>
        ))}
      </div>
    </>
  );
}
