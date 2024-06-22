import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { handleAddToCart } from "./CartUtils";

export const ShowProducts = ({ products, handleOpenPopup, handleAddToWishlist, addToCart }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            {product.images ? (
              <Slider {...settings}>
                {product.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={product.title}
                      onClick={() => handleOpenPopup(product)}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={product.image}
                alt={product.title}
                onClick={() => handleOpenPopup(product)}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 12)}</h5>
              <p className="card-text">$ {product.price}</p>
              <div className="btns">
                <button className="buy-btn" onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
                <button
                  className="cart-btn"
                  onClick={() => handleAddToCart(product, addToCart)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
