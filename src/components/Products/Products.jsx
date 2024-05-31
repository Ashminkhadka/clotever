// import React, { useEffect, useState } from "react";
// import "./Products.css";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   //   const [loading, setLoading] = useState(false);
//   let componentMounted = true;

//   useEffect(() => {
//     const getProducts = async () => {
//     //   setLoading(true);
//       const response = await fetch("http://fakestoreapi.com/products");
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await Response.json());
//         // setLoading(false);
//         console.log(filter);
//       }

//       return () => {
//         componentMounted = false;
//       };
//     };
//     getProducts();
//   });

//   //   const Loading = () => {
//   //     return <>Loading....</>;
//   //   };

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="ProductBtn">
//           <button>All</button>
//           <button>Men's Clothing</button>
//           <button>Women's Clothing</button>
//           {/* <button>Jewellary</button>
//           <button>Electronics</button> */}
//         </div>
//         {filter.map((product) => {
//           return (
//             <>
//               <div className="card">
//                 <img src={product.image} alt={product.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">${product.price}</p>
//                   <a href="#">Go somewhere</a>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </>
//     );
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="featured">
//           <h1>Featured</h1>
//         </div>
//         <div className="product">
//           <h1>Products</h1>
//           <hr className="divider" />
//         </div>
//       </div>
//       <div className="load">{<ShowProducts />}</div>
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const ShowProducts = () => {
    return (
      <>
        <div className="ProductBtn">
          <button>All</button>
          <button>Men's Clothing</button>
          <button>Women's Clothing</button>
          <button>Jewelery</button>
          <button>Electronics</button>
        </div>
        <div className="products-grid">
        {filter.map((product) => {
          return (
            <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0,12)}</h5>
                  <p className="card-text">$ {product.price}</p>
                  {/* <a href="#">Go somewhere</a> */}
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
          <h1>Products</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="load">{<ShowProducts />}</div>
    </div>
  );
};

export default Products;
