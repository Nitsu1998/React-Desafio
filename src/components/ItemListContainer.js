import ItemList from "./ItemList";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";

export default function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    
    setTimeout(()=>{

      fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,40,41,55,57,70,150,151')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(() => {
          console.log("Error al cargar los datos de la API")
        })
      .finally(() => {
          setLoading(false);
        });

    },2000)
  },)

  return (
    <>
      <main id="main">
        {loading ? <div id="loading"><ClipLoader color={"#13c1d8"} size={100} loading={loading} /></div> : <ItemList items={products} />}
      </main>
    </>
  );
}
