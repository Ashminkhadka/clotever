import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity,0);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const shippingFee = 5; 

  const incrementQuantity = (product) => {
    addToCart(product);
  };

  const decrementQuantity = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="bag">
      <div className="cart-container">
        <div className="bagHead">
          <h1>Bag</h1>
          <hr className="aboutDivider" />
        </div>
        {cart.length === 0 ? (
          <p>Your bag is empty.
            <div className="product-link">
              <Link to="/"><button>Back to Shopping <HiOutlineArrowSmLeft /></button></Link>
            </div>
          </p>
          
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cartContent">
                    <h5>{item.title}</h5>
                    <r>Rating: {item.rating.rate}</r>
                    <p>${item.price}</p>
                    <div className="qty">
                      Quantity{" "}
                      <button onClick={() => decrementQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <hr />
              <p>Total Quantity: {totalQuantity}<br/>
              Total Price: ${totalPrice.toFixed(2)}<br/>
              Shipping Fee: ${shippingFee.toFixed(2)}</p>
              <hr />
              <p>Total Amount: ${(totalPrice + shippingFee).toFixed(2)}</p>
              <button className="checkout-button">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
