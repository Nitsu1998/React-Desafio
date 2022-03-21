import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { productsList } from "./ItemListContainer";
import { useParams } from "react-router-dom";

export default function ItemDetailCointainer() {
 
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productsList)
      },2000);
    });
    
    promise
    .then((res) => {
      setProduct(res.find(product => product.id === +id))
      })
      .catch(() => {
        toast.error("Error al obtener el productos" , {autoClose: 2000})
      })
      .finally(() => {
        setLoading(false);
      });
  },[id]);

  return (
      <>
        {loading ? <div id="loading"><ClipLoader color={"#13c1d8"} size={100} loading={loading} /></div> : <ItemDetail product={product}/>}
      </>
  )
}