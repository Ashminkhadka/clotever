// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { Link, useNavigate } from "react-router-dom";
// import { HiOutlineArrowSmLeft } from "react-icons/hi";
// import { useCart } from "./CartContext";

// const Cart = () => {
//   const { cart, addToCart, removeFromCart } = useCart();
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(savedCart);
//   }, []);

//   const saveCart = (cart) => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     setCart(cart);
//   };

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const shippingFee = 5;

//   const incrementQuantity = (product) => {
//     const updatedCart = cart.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     saveCart(updatedCart);
//   };

//   const decrementQuantity = (product) => {
//     const updatedCart = cart.map((item) =>
//       item.id === product.id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     saveCart(updatedCart);
//   };

//   const handleCheckout = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="bag">
//       <div className="cart-container">
//         <div className="bagHead">
//           <h1>Bag</h1>
//           <hr className="aboutDivider" />
//         </div>
//         {cart.length === 0 ? (
//           <p>
//             Your bag is empty.
//             <div className="product-link">
//               <Link to="/">
//                 <button>
//                   Back to Shopping <HiOutlineArrowSmLeft />
//                 </button>
//               </Link>
//             </div>
//           </p>
//         ) : (
//           <>
//             <div className="cart-items">
//               <div className="add-product-link">
//                 <Link to="/">
//                   <button>
//                     Add More Products
//                     <HiOutlineArrowSmLeft />
//                   </button>
//                 </Link>
//               </div>
//               {cart.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <img src={item.images} alt={item.title} />
//                   <div className="cartContent">
//                     <h5>{item.title}</h5>
//                     <p>${item.price}</p>
//                     <div className="qty">
//                       Quantity{" "}
//                       <button onClick={() => decrementQuantity(item)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => incrementQuantity(item)}>+</button>
//                     </div>
//                   </div>
//                 </div>
//                ))}
//              </div>
//              <div className="order-summary">
//                <h2>Order Summary</h2>
//                <hr />
//                <p>
//                  Total Quantity: {totalQuantity}
//                  <br />
//                  Total Price: ${totalPrice.toFixed(2)}
//                  <br />
//                  Shipping Fee: ${shippingFee.toFixed(2)}
//                </p>
//                <hr />
//                <p>Total Amount: ${(totalPrice + shippingFee).toFixed(2)}</p>
//                <button className="checkout-button" onClick={handleCheckout}>Checkout ({totalQuantity})</button>
//              </div>
//            </>
//          )}
//        </div>
//      </div>
//    );
//  };

//  export default Cart;

// import React from "react";
// import { useCart } from "./CartContext";
// import "./Cart.css";
// import { Link, useNavigate } from "react-router-dom";
// import { HiOutlineArrowSmLeft } from "react-icons/hi";
// import { useEffect } from "react";

// const Cart = () => {
//   const { cart, addToCart, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//   //   setCart(storedCart);
//   // }, [setCart]);

//   // Update local storage whenever the cart changes
//   // useEffect(() => {
//   //   localStorage.setItem('cart', JSON.stringify(updatedCart));
//   //   window.dispatchEvent(new Event('storage'));
//   // }, [cart]);

//   // const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   // const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   // const shippingFee = 5;

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity,0);

//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const shippingFee = 5;

//   const incrementQuantity = (product) => {
//     addToCart(product);
//   };

//   const decrementQuantity = (product) => {
//     if (product.quantity === 1) {
//       removeProduct(product);
//     } else {
//       removeFromCart(product);
//     }
//   };

//   const removeProduct = (product) => {
//     const updatedCart = cart.filter((item) => item.id !== product.id);
//     // setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     window.dispatchEvent(new Event('storage'));
//   };

//   const handleCheckout = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="bag">
//       <div className="cart-container">
//         <div className="bagHead">
//           <h1>Bag</h1>
//           <hr className="aboutDivider" />
//         </div>
//         {cart.length === 0 ? (
//           <p>
//             Your bag is empty.
//             <div className="product-link">
//               <Link to="/">
//                 <button>
//                   Back to Shopping <HiOutlineArrowSmLeft />
//                 </button>
//               </Link>
//             </div>
//           </p>
//         ) : (
//           <>
//             <div className="cart-items">
//               <div className="add-product-link">
//                 <Link to="/">
//                   <button>
//                     Add More Products
//                     <HiOutlineArrowSmLeft />
//                   </button>
//                 </Link>
//               </div>
//               {cart.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <img src={item.image ? item.image : item.images[0]} alt={item.title} />
//                   <div className="cartContent">
//                     <h5>{item.title}</h5>
//                     <p>${item.price}</p>
//                     <div className="qty">
//                       Quantity{" "}
//                       <button onClick={() => decrementQuantity(item)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => incrementQuantity(item)}>+</button>
//                       <button className="remove-btn" onClick={() => removeProduct(item)}>X</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="order-summary">
//               <h2>Order Summary</h2>
//               <hr />
//               <p>
//                 Total Quantity: {totalQuantity}
//                 <br />
//                 Total Price: ${totalPrice.toFixed(2)}
//                 <br />
//                 Shipping Fee: ${shippingFee.toFixed(2)}
//               </p>
//               <hr />
//               <p>Total Amount: ${(totalPrice + shippingFee).toFixed(2)}</p>
//               <button className="checkout-button" onClick={handleCheckout}>Checkout ({totalQuantity})</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { auth } from "../Authentication/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const shippingFee = 5;

  const incrementQuantity = (product) => {
    addToCart(product);
  };

  const decrementQuantity = (product) => {
    if (product.quantity === 1) {
      removeProduct(product);
    } else {
      removeFromCart(product);
    }
  };

  const removeProduct = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    // setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

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

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleCheckout = () => {
    if (user) {
      navigate("/checkout");
    } else {
      toast.error("Please login to proceed to checkout.", {
        position: "bottom-center",
      });
      navigate("/login");
    }
  };

  return (
    <div className="bag">
      <div className="cart-container">
        <div className="bagHead">
          <h1>Bag</h1>
          <hr className="aboutDivider" />
        </div>
        {cartItems.length === 0 ? (
          <p>
            Your bag is empty
            <div className="product-link">
              <Link to="/">
                <button>
                  Back to Shopping <HiOutlineArrowSmLeft />
                </button>
              </Link>
            </div>
          </p>
        ) : (
          <>
            <div className="cart-items">
              <div className="add-product-link">
                <Link to="/">
                  <button>
                    Add More Products
                    <HiOutlineArrowSmLeft />
                  </button>
                </Link>
              </div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image ? item.image : item.images[0]}
                    alt={item.title}
                  />
                  <div className="cartContent">
                    <h5>{item.title}</h5>
                    <p>${item.price}</p>
                    <div className="qty">
                      Quantity{" "}
                      <button onClick={() => decrementQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item)}>+</button>
                      <button className="remove-btn"
                      onClick={() => removeProduct(item)}
                      >
                        X
                  </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <hr />
              <p>
                Total Quantity: {totalQuantity}
                <br />
                Total Price: ${totalPrice.toFixed(2)}
                <br />
                Shipping Fee: ${shippingFee.toFixed(2)}
              </p>
              <hr />
              <p>Total Amount: ${(totalPrice + shippingFee).toFixed(2)}</p>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout ({totalQuantity})
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
