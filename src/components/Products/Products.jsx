import React, { useEffect, useState } from "react";
import { useCart } from "../Bag/CartContext";
import "./Products.css";
import ProductPopup from "./ProductPop";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://fakestoreapi.com/products");
      const products = await response.json();
      const filteredProducts = products.filter(
        (product) =>
          product.category !== "jewelery" && product.category !== "electronics"
      );
      setData(filteredProducts);
      setFilter(filteredProducts);
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const sortProducts = (sortType) => {
    let sortedProducts = [...filter];
    if (sortType === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "z-a") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    setFilter(sortedProducts);
  };

  const handleSortChange = (e) => {
    sortProducts(e.target.value);
  };

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="ProductBtn">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <div className="sort-selection">
            <form action="#">
              <label htmlFor="sort"></label>
              <select
                name="sort"
                id="sort"
                className="sort-selection"
                onChange={handleSortChange}
              >
                <option value="">Sort by</option>
                <option value="lowest">Price (lowest)</option>
                <option value="highest">Price (highest)</option>
                <option value="a-z"> Sort (A-Z)</option>
                <option value="z-a">Sort (Z-A)</option>
              </select>
            </form>
          </div>
        </div>
        <div className="products-grid">
          {filter.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  onClick={() => handleOpenPopup(product)}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="card-text">$ {product.price}</p>
                  <div className="btns">
                    <button className="buy-btn">Buy Now</button>
                    <button
                      className="cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="featured">
          <h1>Featured</h1>
        </div>
        <div className="product">
          <h1>Latest Products</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="load">
        <ShowProducts />
        <ProductPopup
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleClosePopup}
          addToCart={addToCart}
        />
      </div>
      {/* <AddProduct onProductAdded={handleProductAdded} /> */}
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

export default Products;
