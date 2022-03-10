export default function Item({product}) {
  
  const {name, image, status, species} = product

  const setPrice = () => {
    let price = 0
    if(status === "Alive" & species === "Human") {
      price = 0.5
    }else if(status === "Dead" & species === "Human") {
      price = 0.75
    }else if(status === "Alive" & species === "Alien") {
      price = 1
    }else if(status === "Dead" & species === "Alien") {
      price = 1.25
    }else if(status === "Alive" & species === "Mythological Creature") {
      price = 2
    }else if(status === "Dead" & species === "Mythological Creature") {
      price = 2.25
    }else {
      price = 4
    }
    return price
  }

  return (
    <>
      <div id="product">
        <img src={image} width="250" height="250" alt="" />
        <div id="infoProduct">
          <h3>{name}</h3>
          <h5>Price: {setPrice(status, species)}ETH</h5>
          <button>More Info</button>
        </div>
      </div>
    </>
  );
}
