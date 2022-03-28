import ItemList from "./ItemList";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


export default function ItemListContainer() {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const { specie, status } = useParams();

  useEffect(() => {
    let getProducts;
    setLoading(true)
    
    if(specie !== undefined) {
      getProducts = query(collection(db, "characters"), where("species", "==", specie))
    } else if (status !== undefined) {
      getProducts = query(collection(db, "characters"), where("status", "==", status))
    } else {
      getProducts = query(collection(db, "characters"))
    }

    getDocs(getProducts)
      .then((res)=>{
        setProducts(res.docs.map(p => ({
          id: p.id,
          ...p.data(), 
        })))
      })
      .catch(()=>{
        toast.error("Error al obtener los productos", { autoClose: 2000 });
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, [specie, status]);
  
  return (
    <>
      {loading ? (
        <div className="loading">
          <ClipLoader color={"#13c1d8"} size={100} loading={loading} />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
}