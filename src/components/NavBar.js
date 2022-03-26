import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div id="nav">
        <div id="nav-species">
          <span>Species</span>
          <ul>
            <NavLink to="/Species/Human"><li>Human</li></NavLink>
            <NavLink to="/Species/Alien"><li>Alien</li></NavLink>
            <NavLink to="/Species/Robot"><li>Robot</li></NavLink>
            <NavLink to="/Species/Humanoid"><li>Humanoid</li></NavLink>
            <NavLink to="/Species/Mythological-Creature"><li>Mythological Creature</li></NavLink> 
          </ul>
        </div>
        <div id="nav-status">
          <span>Status</span>
          <ul>
            <NavLink to="/Status/Alive"><li>Alive</li></NavLink>
            <NavLink to="/Status/Dead"><li>Dead</li></NavLink>
          </ul>
        </div>
        <ul>
          <NavLink to="/AboutUs"><li>AboutUs</li></NavLink>
          <NavLink to="/Contact"><li>Contact</li></NavLink>
        </ul>
      </div>
    </>
  );
}