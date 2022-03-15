import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div id="nav">
        <div id="nav-species">
          <span>Species</span>
          <ul>
            <li>
              <NavLink to="/Species/Human">Human</NavLink>
            </li>
            <li>
              <NavLink to="/Species/Alien">Alien</NavLink>
            </li>
            <li>
              <NavLink to="/Species/Robot">Robot</NavLink>
            </li>
            <li>
              <NavLink to="/Species/Humanoid">Humanoid</NavLink>
            </li>
            <li>
              <NavLink to="/Species/Mythological-Creature">Mythological Creature</NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
