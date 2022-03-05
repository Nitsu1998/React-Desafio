import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <>
      <div id="productsContainer">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            stock={item.stock}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}
