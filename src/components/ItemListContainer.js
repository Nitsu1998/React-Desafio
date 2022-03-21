import ItemList from "./ItemList";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const productsList = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    stock: 5,
    quantity: 0,
    price: 0.4,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    place: "Citadel of Ricks"
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    stock: 3,
    quantity: 0,
    price: 0.6,
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    place: "Citadel of Ricks"
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    stock: 8,
    quantity: 0,
    price: 0.2,
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    place: "Earth (Replacement Dimension)"
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    stock: 9,
    quantity: 0,
    price: 0.2,
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    place: "Earth (Replacement Dimension)"
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    stock: 5,
    quantity: 0,
    price: 0.3,
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    place: "Earth (Replacement Dimension)"
  },
  {
    id: 6,
    name: "Beth's Mytholog",
    status: "Dead",
    species: "Mythological-Creature",
    gender: "Female",
    stock: 2,
    quantity: 0,
    price: 1.5,
    image: "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
    place: "Nuptia 4"
  },
  {
    id: 7,
    name: "Big Boobed Waitress",
    status: "Alive",
    species: "Mythological-Creature",
    gender: "Female",
    stock: 3,
    quantity: 0,
    price: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
    place: "Fantasy World"
  },
  {
    id: 8,
    name: "Boobloosian",
    status: "Dead",
    species: "Alien",
    gender: "unknown",
    stock: 6,
    quantity: 0,
    price: 0.4,
    image: "https://rickandmortyapi.com/api/character/avatar/55.jpeg",
    place: "Nuptia 4"
  },
  {
    id: 9,
    name: "Borpocian",
    status: "Alive",
    species: "Alien",
    gender: "Male",
    stock: 2,
    quantity: 0,
    price: 2.5,
    image: "https://rickandmortyapi.com/api/character/avatar/57.jpeg",
    place: "unknown"
  },
  {
    id: 10,
    name: "Concerto",
    status: "Dead",
    species: "Humanoid",
    gender: "Male",
    stock: 1,
    quantity: 0,
    price: 4,
    image: "https://rickandmortyapi.com/api/character/avatar/70.jpeg",
    place: "unknown"
  },
  {
    id: 11,
    name: "Cornvelious Daniel",
    status: "Dead",
    species: "Alien",
    gender: "Male",
    stock: 7,
    quantity: 0,
    price: 0.3,
    image: "https://rickandmortyapi.com/api/character/avatar/150.jpeg",
    place: "Galactic Federation Prison"
  },
  {
    id: 12,
    name: "Gwendolyn",
    status: "Dead",
    species: "Robot",
    gender: "Female",
    stock: 2,
    quantity: 0,
    price: 4,
    image: "https://rickandmortyapi.com/api/character/avatar/151.jpeg",
    place: "Earth (Replacement Dimension)"
  },
  {
    id: 13,
    name: "Mr. Booby Buyer",
    status: "Alive",
    species: "Mythological-Creature",
    gender: "Male",
    stock: 5,
    quantity: 0,
    price: 1.75,
    image: "https://rickandmortyapi.com/api/character/avatar/238.jpeg",
    place: "Fantasy World"
  },
  {
    id: 14,
    name: "Glootie",
    status: "Alive",
    species: "Alien",
    gender: "Male",
    stock: 25,
    quantity: 0,
    price: 0.1,
    image: "https://rickandmortyapi.com/api/character/avatar/525.jpeg",
    place: "Monogatron Mothership"
  },
  {
    id: 15,
    name: "Pichael Thompson",
    status: "Alive",
    species: "Humanoid",
    gender: "Male",
    stock: 1,
    quantity: 0,
    price: 10,
    image: "https://rickandmortyapi.com/api/character/avatar/264.jpeg",
    place: "Interdimensional Cable"
  },
];

export default function ItemListContainer() {

  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const {specie, status} = useParams()

  useEffect(() => {
    setLoading(true)
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productsList)
      },2000);
    });
    
    promise
    .then((res) => {
        if (specie === undefined && status === undefined) {
          setProducts(productsList)
          }else if(specie !== undefined) {
            setProducts(res.filter(products => products.species === specie))
          }else {
            setProducts(res.filter(products => products.status === status))
          }
      })
      .catch(() => {
        toast.error("Error al obtener los productos" , {autoClose: 2000})
      })
      .finally(() => {
        setLoading(false);
      });
  },[specie, status]);

  return (
    <>
      {loading ? <div id="loading"><ClipLoader color={"#13c1d8"} size={100} loading={loading} /></div> : <ItemList products={products} />}
    </>
  );
}
