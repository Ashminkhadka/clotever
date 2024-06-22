// import React, { useEffect, useState } from "react";
// import { useCart } from "../Bag/CartContext";
// import "./Products.css";
// import ProductPopup from "./ProductPop";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowSmRight } from "react-icons/hi";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const getProducts = async () => {
//       // const response = await fetch("http://fakestoreapi.com/products");
//       const response = await fetch("https://api.escuelajs.co/api/v1/products");
//       const products = await response.json();
//       // const filteredProducts = products.filter(
//       //   (product) =>
//       //     product.category !== "jewelery" && product.category !== "electronics"
//       // );
//       // setData(filteredProducts);
//       // setFilter(filteredProducts);
//     };

//     getProducts();
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
//       sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortType === "z-a") {
//       sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
//     }
//     setFilter(sortedProducts);
//   };

//   const handleSortChange = (e) => {
//     sortProducts(e.target.value);
//   };

//   const handleOpenPopup = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleClosePopup = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="ProductBtn">
//           <button onClick={() => setFilter(data)}>All</button>
//           <button onClick={() => filterProduct("men's clothing")}>
//             Men's Clothing
//           </button>
//           <button onClick={() => filterProduct("women's clothing")}>
//             Women's Clothing
//           </button>
//           <div className="sort-selection">
//             <form action="#">
//               <label htmlFor="sort"></label>
//               <select
//                 name="sort"
//                 id="sort"
//                 className="sort-selection"
//                 onChange={handleSortChange}
//               >
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
//                 <img
//                   src={product.images}
//                   alt={product.title}
//                   onClick={() => handleOpenPopup(product)}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.title.substring(0, 12)}
//                   </h5>
//                   <p className="card-text">$ {product.price}</p>
//                   <div className="btns">
//                     <button className="buy-btn">Buy Now</button>
//                     <button
//                       className="cart-btn"
//                       onClick={() => addToCart(product)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
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
//           <h1>Latest Products</h1>
//           <hr className="divider" />
//         </div>
//       </div>
//       <div className="load">
//         <ShowProducts />
//         <ProductPopup
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={handleClosePopup}
//           addToCart={addToCart}
//         />
//       </div>
//       {/* <AddProduct onProductAdded={handleProductAdded} /> */}
//       <div className="cart-link">
//         <Link to="/cart">
//           <button>
//             Go to Bag <HiOutlineArrowSmRight />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from "react";
// import { useCart } from "../Bag/CartContext";
// import "./Products.css";
// import ProductPopup from "./ProductPop";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowSmRight } from "react-icons/hi";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { handleAddToCart } from "../Utils/CartUtils";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const getProducts = async () => {
//       const response = await fetch("https://api.escuelajs.co/api/v1/products");
//       const products = await response.json();
//       const filteredProducts = products.filter(
//         (product) =>
//           product.category.name === "Clothes" ||
//           product.category.name === "nuevo" ||
//           product.category.name === "Shoes" ||
//           product.category.name === "Miscellaneous" ||
//           product.category.name === "Furniture"
//       );
//       setData(filteredProducts);
//       setFilter(filteredProducts);
//     };

//     getProducts();
//   }, []);

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((x) => x.category.name === cat);
//     setFilter(updatedList);
//   };

//   const sortProducts = (sortType) => {
//     let sortedProducts = [...filter];
//     if (sortType === "lowest") {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortType === "highest") {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     } else if (sortType === "a-z") {
//       sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortType === "z-a") {
//       sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
//     }
//     setFilter(sortedProducts);
//   };

//   const handleSortChange = (e) => {
//     sortProducts(e.target.value);
//   };

//   const handleOpenPopup = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleClosePopup = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   const ShowProducts = () => {
//     const settings = {
//       dots: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <>
//         <div className="ProductBtn">
//           <button onClick={() => setFilter(data)}>All</button>
//           <button onClick={() => filterProduct("Clothes")}>Clothes</button>
//           <button onClick={() => filterProduct("nuevo")}>Electronics</button>
//           <button onClick={() => filterProduct("Shoes")}>Shoes</button>
//           <button onClick={() => filterProduct("Miscellaneous")}>Miscellaneous</button>
//           <button onClick={() => filterProduct("Furniture")}>Furniture</button>
//           <div className="sort-selection">
//             <form action="#">
//               <label htmlFor="sort"></label>
//               <select
//                 name="sort"
//                 id="sort"
//                 className="sort-selection"
//                 onChange={handleSortChange}
//               >
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
//                 <Slider {...settings}>
//                   {product.images.map((image, index) => (
//                     <div key={index}>
//                       <img
//                         src={image}
//                         alt={product.title}
//                         onClick={() => handleOpenPopup(product)}
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.title.substring(0, 12)}
//                   </h5>
//                   <p className="card-text">$ {product.price}</p>
//                   <div className="btns">
//                     <button className="buy-btn">Buy Now</button>
//                     <button
//                       className="cart-btn"
//                       onClick={() => handleAddToCart(product, addToCart)} // Use the utility function
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
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
//           <h1>Latest Products</h1>
//           <hr className="divider" />
//         </div>
//       </div>
//       <div className="load">
//         <ShowProducts />
//         <ProductPopup
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={handleClosePopup}
//           addToCart={(product) => handleAddToCart(product, addToCart)}
//         />
//       </div>
//       <div className="cart-link">
//         <Link to="/cart">
//           <button>
//             Go to Bag <HiOutlineArrowSmRight />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Products;

// import React, { useEffect, useState } from "react";
// import { useCart } from "../Bag/CartContext";
// import "./Products.css";
// import ProductPopup from "./ProductPop";
// import { Link } from "react-router-dom";
// import { HiOutlineArrowSmRight } from "react-icons/hi";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { handleAddToCart } from "../Utils/CartUtils";
// import productsData from "../../assets/products.json";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     // Replace fetch with setting data directly from imported JSON
//     setData(productsData);
//     setFilter(productsData);
//   }, []);

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((x) => x.category.name === cat);
//     setFilter(updatedList);
//   };

//   const sortProducts = (sortType) => {
//     let sortedProducts = [...filter];
//     if (sortType === "lowest") {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortType === "highest") {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     } else if (sortType === "a-z") {
//       sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortType === "z-a") {
//       sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
//     }
//     setFilter(sortedProducts);
//   };

//   const handleSortChange = (e) => {
//     sortProducts(e.target.value);
//   };

//   const handleOpenPopup = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleClosePopup = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   const ShowProducts = () => {
//     const settings = {
//       dots: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <>
//         <div className="ProductBtn">
//         <button onClick={() => setFilter(data)}>All</button>
//           <button onClick={() => filterProduct("Clothes")}>Clothes</button>
//           <button onClick={() => filterProduct("Electronics")}>Electronics</button>
//           <button onClick={() => filterProduct("Shoes")}>Shoes</button>
//           <button onClick={() => filterProduct("Miscellaneous")}>Miscellaneous</button>
//           <button onClick={() => filterProduct("Furniture")}>Furniture</button>
//           <div className="sort-selection">
//             <form action="#">
//               <label htmlFor="sort"></label>
//               <select
//                 name="sort"
//                 id="sort"
//                 className="sort-selection"
//                 onChange={handleSortChange}
//               >
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
//                 <Slider {...settings}>
//                   {product.images.map((image, index) => (
//                     <div key={index}>
//                       <img
//                         src={image}
//                         alt={product.title}
//                         onClick={() => handleOpenPopup(product)}
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.title.substring(0, 12)}
//                   </h5>
//                   <p className="card-text">$ {product.price}</p>
//                   <div className="btns">
//                     <button className="buy-btn">Buy Now</button>
//                     <button
//                       className="cart-btn"
//                       onClick={() => handleAddToCart(product, addToCart)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
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
//           <h1>Latest Products</h1>
//           <hr className="divider" />
//         </div>
//       </div>
//       <div className="load">
//         <ShowProducts />
//         <ProductPopup
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={handleClosePopup}
//           addToCart={(product) => handleAddToCart(product, addToCart)}
//         />
//       </div>
//       <div className="cart-link">
//         <Link to="/cart">
//           <button>
//             Go to Bag <HiOutlineArrowSmRight />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useEffect, useState } from "react";
import { useCart } from "../Bag/CartContext";
import "./Products.css";
import ProductPopup from "./ProductPop";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { ShowProducts } from "../Utils/ProductsUtils";
import productsData from "../../assets/products.json";
// import {handleAddToWishlist} from "../Utils/WishlistUtils"
import { useWishlist } from "../Wishlist/Context";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { dispatch } = useWishlist();

  useEffect(() => {
    setData(productsData);
    setFilter(productsData);
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category.name === cat);
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

  const handleAddToWishlist = product => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
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
      <div className="ProductBtn">
        <button onClick={() => setFilter(data)}>All</button>
        <button onClick={() => filterProduct("Clothes")}>Clothes</button>
        <button onClick={() => filterProduct("Electronics")}>Electronics</button>
        <button onClick={() => filterProduct("Shoes")}>Shoes</button>
        <button onClick={() => filterProduct("Miscellaneous")}>Miscellaneous</button>
        <button onClick={() => filterProduct("Furniture")}>Furniture</button>
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
      <div className="load">
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

export default Products;