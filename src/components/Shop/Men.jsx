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

// import React, { useEffect, useState } from "react";
// // import "../../components/Products/Products";
// import './Men.css'
// import {Link} from 'react-router-dom'
// import { useCart } from "../Bag/CartContext";
// import { handleAddToCart} from "../Products/Products"
// import ProductPopup from "../../components/Products/ProductPop";
// import { HiOutlineArrowSmRight } from "react-icons/hi";

// const WomenProducts = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       const response = await fetch("http://fakestoreapi.com/products");
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
//                 <img
//                   src={product.image}
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
//                       onClick={() => handleAddToCart(product)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className="menContainer">
//         <div className="menProduct">
//           <h1>Men's Clothing</h1>
//           <hr className="divider" />
//         </div>
//       </div>
//       <div className="menLoad"><ShowProducts /> <ProductPopup
//           // product={selectedProduct}
//           // isOpen={isModalOpen}
//           // onClose={handleClosePopup}
//           // addToCart={addToCart}
//         /></div>
//         <div className="cart-link">
//         <Link to="/cart">
//           <button>
//             Go to Bag <HiOutlineArrowSmRight />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default WomenProducts;

// import React, { useEffect, useState } from "react";
// import './Men.css';
// import { Link } from 'react-router-dom';
// import { useCart } from "../Bag/CartContext";
// import { handleAddToCart } from "../Utils/CartUtils";
// import ProductPopup from "../Products/ProductPop";
// import { HiOutlineArrowSmRight } from "react-icons/hi";

// const MenProducts = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       const response = await fetch("http://fakestoreapi.com/products");
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
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 onClick={() => handleOpenPopup(product)}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {product.title.substring(0, 12)}
//                 </h5>
//                 <p className="card-text">$ {product.price}</p>
//                 <div className="btns">
//                   <button className="buy-btn">Buy Now</button>
//                   <button
//                     className="cart-btn"
//                     onClick={() => handleAddToCart(product, addToCart)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className="menContainer">
//         <div className="menProduct">
//           <h1>Men's Clothing</h1>
//           <hr className="divider" />
//         </div>
//       </div>
//       <div className="menLoad">
//         <ShowProducts />
//         <ProductPopup
//           // product={selectedProduct}
//           // isOpen={isModalOpen}
//           // onClose={handleClosePopup}
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

// export default MenProducts;



import React, { useEffect, useState } from "react";
import './Men.css';
import { Link } from 'react-router-dom';
import { useCart } from "../Bag/CartContext";
import { handleAddToCart } from "../Utils/CartUtils";
import { ShowProducts } from "../Utils/ProductsUtils";
import ProductPopup from "../Products/ProductPop";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import {handleAddToWishlist} from '../Utils/WishlistUtils'

const MenProducts = () => {
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
      <div className="menContainer">
        <div className="menProduct">
          <h1>Men's Clothing</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="menLoad">
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

export default MenProducts;
