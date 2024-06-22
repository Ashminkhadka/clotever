import React from "react";
import Modal from "react-modal";
import "./ProductPop.css";
import { FaStar } from "react-icons/fa";

Modal.setAppElement("#root");

const ProductPop = ({ product, isOpen, onClose, addToCart }) => {

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Product Details"
      className="product-popup" overlayClassName="product-popup-overlay">
      <div className="pop-content">
        <div className="pop-btn">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <img src={product.images} alt={product.title} />
          <h2>
            {product.title.substring(0,70)}
            <p>
              {product.description.substring(0,150)}
              <br />
              {/* <span className="rating">
                Rating: {product.rating && product.rating.rate}
                <i>
                  <FaStar />
                </i>
              </span> */}
            </p>
            <span className="price">${product.price}</span>
            <div className="btns-pop">
              <button
                className="buy-btn"
                // onClick={() => handleOpenPopup(product)}
              >
                Add to Wishlist
              </button>
              <button className="cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </h2>
        </div>
      </div>
    </Modal>
  );
};

export default ProductPop;
