// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { GiShoppingCart } from "react-icons/gi";
// import { IoIosArrowForward } from "react-icons/io";
// import { CgMenu, CgClose } from "react-icons/cg";
// import "./Navbar.css";

// const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
//   const navigate = useNavigate();

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setShowSecondaryNavbar(currentScrollPos > 80); // Show secondary navbar after 80px scroll
//     setScrollPosition(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollPosition]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const navigateTo = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       <div className={`navContainer ${showSecondaryNavbar ? "hidden" : "visible"}`}>
//         <nav className="navbar">
//           <NavLink className='logo' to="/shop/all">ClotEver</NavLink>
//           <NavLink exact to="/" className="nav-link" activeClassName="active-link">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="nav-link" activeClassName="active-link">
//             About us
//           </NavLink>
//           <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//             <button className="dropbtn nav-link">
//               Shop
//             </button>
//             {dropdownVisible && (
//               <div className="dropdown-content">
//                 <button onClick={() => navigateTo("/shop/men")} className="nav-link">
//                   Men
//                 </button>
//                 <button onClick={() => navigateTo("/shop/women")} className="nav-link">
//                   Women
//                 </button>
//               </div>
//             )}
//           </div>
//           <NavLink to="/blogs" className="nav-link" activeClassName="active-link">
//             Blogs
//           </NavLink>
//           <NavLink to="/contact" className="nav-link" activeClassName="active-link">
//             Contact
//           </NavLink>
//           <div className="cart">
//             <NavLink to="/cart" activeClassName="active-link"><GiShoppingCart/></NavLink>
//           </div>
//           <div className="account">
//             <button className="myAccount">My Account <IoIosArrowForward /></button>
//           </div>
//           <div className="mobile-navbar-menu">
//               <CgMenu name='menu-outline' className="mobile-nav-icon"/>
//               <CgClose name='close-outline' className="mobile-nav-icon close-outline"/>
//             </div>
//         </nav>
//       </div>
//       {showSecondaryNavbar && (
//         <div className="secondaryNavbar">
//           <nav className="navbar">
//             <NavLink exact to="/" className="nav-link" activeClassName="active-link">
//               Home
//             </NavLink>
//             <NavLink to="/about" className="nav-link" activeClassName="active-link">
//               About us
//             </NavLink>
//             <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//               <button className="dropbtn nav-link">
//                 Shop
//               </button>
//               {dropdownVisible && (
//                 <div className="dropdown-content">
//                   <button onClick={() => navigateTo("/shop/men")} className="nav-link">
//                     Men
//                   </button>
//                   <button onClick={() => navigateTo("/shop/women")} className="nav-link">
//                     Women
//                   </button>
//                 </div>
//               )}
//             </div>
//             <NavLink to="/blogs" className="nav-link" activeClassName="active-link">
//               Blogs
//             </NavLink>
//             <NavLink to="/contact" className="nav-link" activeClassName="active-link">
//               Contact
//             </NavLink>
//             <div className="cart">
//               <NavLink to="/cart" activeClassName="active-link"><GiShoppingCart/></NavLink>
//             </div>
//             <div className="account">
//               <button className="myAccount">My Account <IoIosArrowForward /></button>
//             </div>
//             <div className="mobile-navbar-menu">
//               <CgMenu name='menu-outline' className="mobile-nav-icon"/>
//               <CgClose name='close-outline' className="mobile-nav-icon close-outline"/>
//             </div>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CgMenu, CgClose } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowSecondaryNavbar(currentScrollPos > 80); // Show secondary navbar after 80px scroll
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close the mobile menu on navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className={`navContainer ${showSecondaryNavbar ? "hidden" : "visible"}`}>
        <nav className="navbar">
          <NavLink className="logo" to="/shop/all">ClotEver</NavLink>
          <div className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
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
                  <button onClick={() => navigateTo("/shop/men")} className="nav-link">
                    Men
                  </button>
                  <button onClick={() => navigateTo("/shop/women")} className="nav-link">
                    Women
                  </button>
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
              <NavLink to="/cart" activeClassName="active-link"><FaShoppingBag /></NavLink>
            </div>
            <div className="account">
              <button className="myAccount">My Account <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <CgClose className="mobile-nav-icon" /> : <CgMenu className="mobile-nav-icon" />}
          </div>
        </nav>
      </div>
      {showSecondaryNavbar && (
        <div className="secondaryNavbar">
          <nav className="navbar">
          <NavLink className="logo" to="/shop/all">ClotEver</NavLink>
          <div className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
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
                  <button onClick={() => navigateTo("/shop/men")} className="nav-link">
                    Men
                  </button>
                  <button onClick={() => navigateTo("/shop/women")} className="nav-link">
                    Women
                  </button>
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
              <NavLink to="/cart" activeClassName="active-link"><FaShoppingBag /></NavLink>
            </div>
            <div className="account">
              <button className="myAccount">My Account <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <CgClose className="mobile-nav-icon" /> : <CgMenu className="mobile-nav-icon" />}
          </div>
        </nav>
          {/* <nav className="navbar">
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
                  <button onClick={() => navigateTo("/shop/men")} className="nav-link">
                    Men
                  </button>
                  <button onClick={() => navigateTo("/shop/women")} className="nav-link">
                    Women
                  </button>
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
            <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <CgClose className="mobile-nav-icon" /> : <CgMenu className="mobile-nav-icon" />}
          </div>
          </nav>
          {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
            <div className="mobile-menu-content">
              <NavLink exact to="/" className="nav-link" onClick={toggleMobileMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link" onClick={toggleMobileMenu}>
                About us
              </NavLink>
              <NavLink to="/shop/men" className="nav-link" onClick={toggleMobileMenu}>
                Shop Men
              </NavLink>
              <NavLink to="/shop/women" className="nav-link" onClick={toggleMobileMenu}>
                Shop Women
              </NavLink>
              <NavLink to="/blogs" className="nav-link" onClick={toggleMobileMenu}>
                Blogs
              </NavLink>
              <NavLink to="/contact" className="nav-link" onClick={toggleMobileMenu}>
                Contact
              </NavLink>
              <NavLink to="/cart" className="nav-link" onClick={toggleMobileMenu}>
                <GiShoppingCart /> Cart
              </NavLink>
              <button className="myAccount" onClick={toggleMobileMenu}>
                My Account <IoIosArrowForward />
              </button>
            </div>
          </div>
          )} */}
        </div>
        
      )}
    </>
  );
};

export default Navbar;

