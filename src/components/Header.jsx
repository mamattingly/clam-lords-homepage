import "./componentStyles/HeaderStyles.css"

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { pathname } = useLocation();
  const [burgerClick, setBurgerClick] = useState(false);

  const setBurgerClickFalse = () => {
    setBurgerClick(false);
  };

  const burgerToggle = () => {
    setBurgerClick(!burgerClick);
  };

  useEffect(() => {
    setBurgerClick(false);
  }, [pathname]);

  return (
    <nav className="header">
      <h1>Clam Lords</h1>
      <div className={burgerClick ? "nav-title active" : "nav-title"}>
              <ul className={burgerClick ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/discord">Discord</Link>
          </li>
          <li className="nav-item">
            <Link to="/members">Members</Link>
          </li>
          <li className="nav-item">
            <Link to="/logs">Wow Logs</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="burger" onClick={burgerToggle}>
        {burgerClick ? (
          <FaTimes size={25} style={{ color: "#000" }} />
        ) : (
          <FaBars size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}

export default Header;
