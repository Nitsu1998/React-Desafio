import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function ItemDetailCointainer() {
    
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://rickandmortyapi.com/api/character/1')
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch(() => {
          console.log("Error al cargar los datos de la API");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
      <>
        {loading ? <div id="loading"><ClipLoader color={"#13c1d8"} size={100} loading={loading} /></div> : <ItemDetail product={product} />}
      </>
  )
}
