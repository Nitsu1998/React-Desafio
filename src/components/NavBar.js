import CartWidget from "./CartWidget.js";

export default function NavBar() {
  return (
    <>
      <div id="nav">
        <ul>
          <li>
            <a href="/#">Top Sells</a>
          </li>
          <li>
            <a href="/#">My NFT</a>
          </li>
          <li>
            <a href="/#">About Us</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>

        <div id="nav-sign">
          <button>SIGN IN</button>
          <button>SIGN UP</button>
          <CartWidget />
        </div>
      </div>
    </>
  );
}
