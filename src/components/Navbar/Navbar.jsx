// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navContainer">
//       <nav className="navbar">
//         <NavLink exact to="/" className="nav-link" activeClassName="active-link">
//           Home
//         </NavLink>
//         <NavLink to="/about" className="nav-link" activeClassName="active-link">
//           About us
//         </NavLink>
//         <NavLink to="/about" className="nav-link" activeClassName="active-link">
//           Shop
//         </NavLink>
//         <NavLink to="/blogs" className="nav-link" activeClassName="active-link">
//           Blogs
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="nav-link"
//           activeClassName="active-link"
//         >
//           Contact
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navContainer">
      <nav className="navbar">
        <NavLink exact to="/" className="nav-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">
          About us
        </NavLink>
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <button className="dropbtn nav-link">
            Shop
          </button>
          {dropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/shop/men" className="nav-link" activeClassName="active-link">
                Men
              </NavLink>
              <NavLink to="/shop/women" className="nav-link" activeClassName="active-link">
                Women
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/blogs" className="nav-link" activeClassName="active-link">
          Blogs
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active-link">
          Contact
        </NavLink>
        <div className="cart">
          <NavLink to="/cart" activeClassName="active-link"><GiShoppingCart/></NavLink>
        </div>
        <div className="account">
          <button className="myAccount">My Account <IoIosArrowForward /></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

