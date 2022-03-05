import ItemList from "./ItemList";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";

export default function ItemListContainer() {
  const itemsList = [
    {
      id: 1,
      name: "Rick Sanchez",
      stock: 10,
      price: 0.2,
      img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      stock: 8,
      price: 0.3,
      img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      stock: 5,
      price: 0.4,
      img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Beth Smith",
      stock: 2,
      price: 0.5,
      img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      id: 5,
      name: "Jerry Smith",
      stock: 1,
      price: 1,
      img: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(itemsList)
      },2000);
    });
    
    promise
    .then(() => {
        setProducts(itemsList);
      })
      .catch(() => {
        console.log("Error al cargar los datos de la API")
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      <main id="main">
        {loading ? <div id="loading"><ClipLoader color={"#13c1d8"} size={60} loading={loading} /></div> : <ItemList items={products} />}
      </main>
    </>
  );
}
