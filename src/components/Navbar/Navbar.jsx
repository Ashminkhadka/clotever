// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaShoppingBag } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { CgMenu, CgClose } from "react-icons/cg";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../Authentication/Firebase";
// import Profile from "../../assets/myImage.jpg"
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "./Navbar.css";

// const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const updateCartQuantity = () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//     setTotalQuantity(totalQuantity);
//   };

//   useEffect(() => {
//     const handleStorageChange = () => {
//       updateCartQuantity();
//     };

//     window.addEventListener('storage', handleStorageChange);
//     updateCartQuantity(); // Set initial quantity

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setShowSecondaryNavbar(currentScrollPos > 80);
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
//     setMobileMenuOpen(false);
//   };

//   const handleAccount = () => {
//     navigate(user ? "/login" : "/register");
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       toast.success("User Log Out Successfully!!", {
//         position: "top-center",
//       });
//       setTimeout(() =>{
//         navigate("/");
//       },1000);
//     } catch (error) {
//       console.error("Error logging out: ", error);
//     }
//   };

//   return (
//     <>
//     <ToastContainer/>
//       <div className={`navContainer ${showSecondaryNavbar ? "hidden" : "visible"}`}>
//         <nav className="navbar">
//           <NavLink className="logo" to="/shop/all">ClotEver</NavLink>
//           <div className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
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
//             <NavLink to="/contact" className="nav-link" activeClassName="active-link">
//               Contact
//             </NavLink>
//             <div className="cart">
//               <NavLink to="/cart" activeClassName="active-link">
//                 <FaShoppingBag />
//                 {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
//               </NavLink>
//             </div>
//             <div className="account">
//               {user ? (
//                 <div className="user-info">
//                   <img src={Profile} alt="Profile" className="profile-logo" />
//                   <button onClick={handleLogout}></button>
//                 </div>
//               ) : (
//                 <button className="myAccount" onClick={handleAccount}>My Account <IoIosArrowForward /></button>
//               )}
//             </div>
//           </div>
//           <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
//             {mobileMenuOpen ? <CgClose className="mobile-nav-icon" /> : <CgMenu className="mobile-nav-icon" />}
//           </div>
//         </nav>
//       </div>
//       {showSecondaryNavbar && (
//         <div className="secondaryNavbar">
//           <nav className="navbar">
//             <NavLink className="logo" to="/shop/all">ClotEver</NavLink>
//             <div className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
//               <NavLink exact to="/" className="nav-link" activeClassName="active-link">
//                 Home
//               </NavLink>
//               <NavLink to="/about" className="nav-link" activeClassName="active-link">
//                 About us
//               </NavLink>
//               <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                 <button className="dropbtn nav-link">
//                   Shop
//                 </button>
//                 {dropdownVisible && (
//                   <div className="dropdown-content">
//                     <button onClick={() => navigateTo("/shop/men")} className="nav-link">
//                       Men
//                     </button>
//                     <button onClick={() => navigateTo("/shop/women")} className="nav-link">
//                       Women
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <NavLink to="/contact" className="nav-link" activeClassName="active-link">
//                 Contact
//               </NavLink>
//               <div className="cart">
//                 <NavLink to="/cart" activeClassName="active-link">
//                   <FaShoppingBag />
//                   {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
//                 </NavLink>
//               </div>
//               <div className="account">
//       {user ? (
//         <div className="user-info">
//           <img src={Profile} alt="Profile" className="profile-logo" />
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <button className="myAccount" onClick={handleAccount}>
//           My Account <IoIosArrowForward />
//         </button>
//       )}
//     </div>
//             </div>
//             <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
//               {mobileMenuOpen ? <CgClose className="mobile-nav-icon" /> : <CgMenu className="mobile-nav-icon" />}
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
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Authentication/Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Account from "../Account/Account";
// import wishlist from "../Wishlist/Wishlist";
import { useWishlist } from "../Wishlist/Context";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const updateCartQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(totalQuantity);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateCartQuantity();
    };

    window.addEventListener("storage", handleStorageChange);
    updateCartQuantity(); // Set initial quantity

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowSecondaryNavbar(currentScrollPos > 80);
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
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`navContainer ${showSecondaryNavbar ? "hidden" : "visible"}`}
      >
        <nav className="navbar">
          <NavLink className="logo" to="/shop/all">
            ClotEver
          </NavLink>
          <div
            className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
          >
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              About us
            </NavLink>
            <div
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <button className="dropbtn nav-link">Shop</button>
              {dropdownVisible && (
                <div className="dropdown-content">
                  <button
                    onClick={() => navigateTo("/shop/men")}
                    className="nav-link"
                  >
                    Men
                  </button>
                  <button
                    onClick={() => navigateTo("/shop/women")}
                    className="nav-link"
                  >
                    Women
                  </button>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
            >
              Contact
            </NavLink>
            <div className="cart">
              <NavLink to="/cart" activeClassName="active-link">
                <FaShoppingBag />
                {totalQuantity > 0 && (
                  <sup className="cart-badge">{totalQuantity}</sup>
                )}
              </NavLink>
            </div>
            <div className="wishlist">
              <NavLink to="/wishlist" activeClassName="active-link">
                <FaHeart />
                {wishlist.length > 0 && (
                  <span className="wishlist-badge">{wishlist.length}</span>
                )}
              </NavLink>
            </div>
            <Account user={user} />
          </div>
          <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <CgClose className="mobile-nav-icon" />
            ) : (
              <CgMenu className="mobile-nav-icon" />
            )}
          </div>
        </nav>
      </div>
      {showSecondaryNavbar && (
        <div className="secondaryNavbar">
          <nav className="navbar">
            <NavLink className="logo" to="/shop/all">
              ClotEver
            </NavLink>
            <div
              className={`nav-links ${
                mobileMenuOpen ? "mobile-menu-open" : ""
              }`}
            >
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-link"
              >
                About us
              </NavLink>
              <div
                className="dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <button className="dropbtn nav-link">Shop</button>
                {dropdownVisible && (
                  <div className="dropdown-content">
                    <button
                      onClick={() => navigateTo("/shop/men")}
                      className="nav-link"
                    >
                      Men
                    </button>
                    <button
                      onClick={() => navigateTo("/shop/women")}
                      className="nav-link"
                    >
                      Women
                    </button>
                  </div>
                )}
              </div>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active-link"
              >
                Contact
              </NavLink>
              <div className="cart">
                <NavLink to="/cart" activeClassName="active-link">
                  <FaShoppingBag />
                  {totalQuantity > 0 && (
                    <sup className="cart-badge">{totalQuantity}</sup>
                  )}
                </NavLink>
              </div>
              <div className="wishlist">
              <NavLink to="/wishlist" activeClassName="active-link">
                <FaHeart />
                {wishlist.length > 0 && (
                  <span className="wishlist-badge">{wishlist.length}</span>
                )}
              </NavLink>
            </div>
              <Account user={user} /> {/* Include the Account component */}
            </div>
            <div className="mobile-navbar-menu" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <CgClose className="mobile-nav-icon" />
              ) : (
                <CgMenu className="mobile-nav-icon" />
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
