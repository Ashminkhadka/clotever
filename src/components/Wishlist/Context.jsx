import React, { createContext, useContext, useReducer, useEffect } from 'react';

const Context = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id);
    case 'SET_WISHLIST':
      return action.payload;
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [], () => {
    const localData = localStorage.getItem('wishlist');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist)  );
  }, [wishlist]);

  return (
    <Context.Provider value={{ wishlist, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useWishlist = () => useContext(Context);
