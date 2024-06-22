import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../Bag/CartContext";
import { handleAddToCart } from "../Utils/CartUtils";
import { ShowProducts } from "../Utils/ProductsUtils";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import ProductPopup from '../Products/ProductPop'
import './Women.css'
import {handleAddToWishlist} from '../Utils/WishlistUtils'

const WomenProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        const filteredProducts = products.filter(product => product.category === "women's clothing");
        setData(filteredProducts);
        setFilter(filteredProducts);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="womContainer">
        <div className="womProduct">
          <h1>Women's Clothing</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="womLoad">
        <ShowProducts products={filter} 
        handleOpenPopup={handleOpenPopup} 
        handleAddToWishlist={handleAddToWishlist}
        addToCart={addToCart} />
        <ProductPopup
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleClosePopup}
          addToCart={(product) => handleAddToCart(product, addToCart)}
        />
      </div>
      <div className="cart-link">
        <Link to="/cart">
          <button>
            Go to Bag <HiOutlineArrowSmRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WomenProducts;
