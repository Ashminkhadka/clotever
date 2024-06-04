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

// import React, { useEffect, useState } from "react";
// import "./Products.css";
// import Skeleton from "react-loading-skeleton";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("http://fakestoreapi.com/products");
//       if (componentMounted) {
//         const products = await response.json();
//         setLoading(false);
//         setData(products);
//         setFilter(products);
//       }
//     };

//     getProducts();

//     return () => {
//       componentMounted = false;
//     };
//   }, []);

//   // const Loading =() =>{
//   //   return(
//   //     <>
//   //       <div className="">
//   //         <Skeleton height={350}/>
//   //       </div>
//   //       <div className="">
//   //         <Skeleton height={350}/>
//   //       </div>
//   //       <div className="">
//   //         <Skeleton height={350}/>
//   //       </div>
//   //       <div className="">
//   //         <Skeleton height={350}/>
//   //       </div>
//   //     </>
//   //   )
//   // }

//   const filterProduct =(cat) =>{
//     const updatedList = data.filter((x) => x.category === cat);
//     setFilter(updatedList);
//   }

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="ProductBtn">
//           <button onClick={()=>setFilter(data)}>All</button>
//           <button onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
//           <button onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
//           <button onClick={()=>filterProduct("jewelery")}>Jewelery</button>
//           <button onClick={()=>filterProduct("electronics")}>Electronics</button>
//         </div>
//         <div className="products-grid">
//         {filter.map((product) => {
//           return (
//             <div className="card" key={product.id}>
//                 <img src={product.image} alt={product.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title.substring(0,12)}</h5>
//                   <p className="card-text">$ {product.price}</p>
//                   {/* <a href="#">Go somewhere</a> */}
//                 </div>
//               </div>
//           );
//         })}
//         </div>
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

// import React, { useEffect, useState } from "react";
// import "./Products.css";
// import { NavLink } from "react-router-dom";
// import ProductPop from "./ProductPop";

// const Products = ({ category }) => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       const response = await fetch("http://fakestoreapi.com/products");
//       if (componentMounted) {
//         const products = await response.json();
//         // Filter out jewelery and electronics
//         const filteredProducts = products.filter(
//           (product) => product.category !== "jewelery" && product.category !== "electronics"
//         );
//         setData(filteredProducts);
//         setFilter(filteredProducts);
//       }
//     };

//     getProducts();

//     return () => {
//       componentMounted = false;
//     };
//   }, []);

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((x) => x.category === cat);
//     setFilter(updatedList);
//   };

//   const sortProducts = (sortType) => {
//     let sortedProducts = [...filter];
//     if (sortType === "lowest") {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortType === "highest") {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     } else if (sortType === "a-z") {
//       sortedProducts.sort((a, b) => a.title.localCompare(b.title));
//     } else if (sortType === "z-a") {
//       sortedProducts.sort((a, b) => b.title.localCompare(a.title));
//     }
//     setFilter(sortedProducts);
//   };

//   const handleSortChange = (e) => {
//     sortProducts(e.target.value);
//   };

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="ProductBtn">
//           <button onClick={() => setFilter(data)}>All</button>
//           <button onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//           <button onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
//           <div className="sort-selection">
//             <form action="#">
//               <label htmlFor="sort"></label>
//               <select
//                 name="sort"
//                 id="sort"
//                 className="sort-selection"
//                 onChange={handleSortChange}>
//                 <option value="">Sort by</option>
//                 <option value="lowest">Price (lowest)</option>
//                 <option value="highest">Price (highest)</option>
//                 <option value="a-z"> Sort (A-Z)</option>
//                 <option value="z-a">Sort (Z-A)</option>
//               </select>
//             </form>
//           </div>
//         </div>
//         <div className="products-grid">
//           {filter.map((product) => {
//             return (
//               <div className="card" key={product.id}>
//                 <img src={product.image} alt={product.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title.substring(0, 12)}</h5>
//                   <p className="card-text">$ {product.price}</p>
//                   <NavLink to={'/productpop/${product.id}'}>
//                     <button className="buy-btn">
//                       Buy Now
//                   </button>
//                   </NavLink>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
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
//       <div className="load">{<ShowProducts />}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductPopup from "./ProductPop";

const Products = ({ category }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        // Filter out jewelery and electronics
        const filteredProducts = products.filter(
          (product) =>
            product.category !== "jewelery" &&
            product.category !== "electronics"
        );
        setData(filteredProducts);
        setFilter(filteredProducts);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
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
                <img src={product.image} alt={product.title} onClick={() => handleOpenPopup(product)}/>
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="card-text">$ {product.price}</p>
                  <div className="btns">
                    <button
                      className="buy-btn"
                    >
                      Buy Now
                    </button>
                    <button
                      className="cart-btn"
                      // onClick={() => handleOpenPopup(product)}
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
        />
      </div>
    </div>
  );
};

export default Products;
