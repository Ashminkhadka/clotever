import React, { useEffect, useState } from "react";
import "../../components/Products/Products";

const WomenProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

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

  const ShowProducts = () => {
    return (
      <div className="products-grid">
        {filter.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                <p className="card-text">$ {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="featured">
          <h1>Women's Clothing</h1>
        </div>
        <div className="product">
          <h1>Products</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="load">{<ShowProducts />}</div>
    </div>
  );
};

export default WomenProducts;
