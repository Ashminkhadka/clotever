// import React, { useEffect, useState } from "react";
// import "../../components/Products/Products";

// const MenProducts = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       const response = await fetch('http://fakestoreapi.com/products/${id}');
//       if (componentMounted) {
//         const products = await response.json();
//         const filteredProducts = products.filter(product => product.category === "men's clothing");
//         setData(filteredProducts);
//         setFilter(filteredProducts);
//       }
//     };

//     getProducts();

//     return () => {
//       componentMounted = false;
//     };
//   }, []);

//   const ShowProducts = () => {
//     return (
//       <div className="products-grid">
//         {filter.map((product) => {
//           return (
//             <div className="card" key={product.id}>
//               <img src={product.image} alt={product.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title.substring(0, 12)}</h5>
//                 <p className="card-text">$ {product.price}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="featured">
//           {/* <h1>Men's Clothing</h1> */}
//         </div>
//         <div className="product">
//           <h1>Men's Clothing</h1>
//           <hr className="mendivider" />
//         </div>
//       </div>
//       <div className="load">{<ShowProducts />}</div>
//     </div>
//   );
// };

// export default MenProducts;

import React, { useEffect, useState } from "react";
import "../../components/Products/Products";
import './Men.css'

const WomenProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        const filteredProducts = products.filter(product => product.category === "men's clothing");
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
      <div className="menContainer">
        <div className="menProduct">
          <h1>Men's Clothing</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="menLoad">{<ShowProducts />}</div>
    </div>
  );
};

export default WomenProducts;
