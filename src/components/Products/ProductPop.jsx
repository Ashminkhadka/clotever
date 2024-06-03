// import React from 'react'
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductPop = () => {
//     const {id} = useParams();
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect (() =>{
//         const getProduct = async () => {
//             setLoading(true);
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//             setProduct(await response.json());
//             setLoading(false);
//         }
//         getProduct();
//     }, []);

//     const Loading = () =>{
//       return(
//         <>
//           Loading.....
//         </>
//       )
//     }

//     const ShowProduct= () =>{
//       return(
//         <>
//           <div className='show-pop'>
//             <img src={product.image} alt={product.title} height="400px" width="400px"/>
//           </div>
//         </>
//       )
//     }

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ProductPop

// import React from "react";

// const ProductPop = ({ product }) => {
//   const {id} = useParams();
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect (() =>{
//         const getProduct = async () => {
//             setLoading(true);
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//             setProduct(await response.json());
//             setLoading(false);
//         }
//         getProduct();
//     }, []);

//     const Loading = () =>{
//       return(
//         <>
//           Loading.....
//         </>
//       )
//     }

//     const ShowProduct= () =>{
//       return(
//         <>
//           <div className='show-pop'>
//             <img src={product.image} alt={product.title} height="400px" width="400px"/>
//           </div>
//         </>
//       )
//     }

//   if (!product) return null;

//   return (
//     <div className="product-pop">
//       <img src={product.image} alt={product.title} height="400px" width="400px" />
//       <div className="product-details">
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p>${product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductPop;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductPop = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getProduct = async () => {
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch product');
//                 }
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getProduct();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className='product-pop'>
//             <h2>{product.title}</h2>
//             <img src={product.image} alt={product.title} />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//         </div>
//     );
// };

// export default ProductPop;

import React from 'react';
// import './ProductPopup.css';

const ProductPop = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="product-popup">
      <div className="product-popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPop;
