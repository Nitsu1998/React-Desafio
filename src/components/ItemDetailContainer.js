import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { getDoc, doc } from "firebase/firestore";

export default function ItemDetailCointainer() {
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getProductById = doc(db, "characters", id);

    getDoc(getProductById)
      .then((res) => {
        setProduct({...res.data(), id: id});
      })
      .catch(() => {
        toast.error("Error al obtener el productos", { autoClose: 2000 });
      })
      .finally(() => {
        setLoading(false);
      });
    }, [id]);
    
  return (
    <>
      {loading ? (
        <div id="loading">
          <ClipLoader color={"#13c1d8"} size={100} loading={loading} />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
}