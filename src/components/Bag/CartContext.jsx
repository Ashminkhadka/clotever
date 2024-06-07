import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existItemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existItemIndex].quantity++;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existItemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existItemIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existItemIndex].quantity > 1) {
          updatedCart[existItemIndex].quantity--;
        } else {
          updatedCart.splice(existItemIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
