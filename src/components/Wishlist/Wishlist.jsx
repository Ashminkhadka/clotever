import React from 'react';
import { useWishlist } from '../Wishlist/Context';

const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();

  const handleRemoveFromWishlist = (product) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
  };

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div className="wishlist-card" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <div className="wishlist-info">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleRemoveFromWishlist(product)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
