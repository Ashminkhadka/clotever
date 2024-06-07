// import React from 'react'
// import './App.css'
// import Header from './components/Header'
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ImageSlider from './components/imageSlider/ImageSlider';
// import Home from './components/Home/Home';
// import About from './components/About/About'
// import MenProducts from './components/Shop/Men';
// import WomenProducts from './components/Shop/Women';

// const App = () => {
//   return (
//       <Router>
//         <Header/>
//         <Navbar/>
//         <ImageSlider/>
//        <Home/>
//         <Routes>
//            <Route path='/about' element={<About/>}/>
//          {/* <Route path='/shop' element={<Shop/>}/> */}
//          <Route path="/shop/men" component={MenProducts} />
//         <Route path="/shop/women" component={WomenProducts} />
//           {/* <Route path='/blogs' element={<Blogs/>}/>
//           <Route path='/contact' element={<Contact/>}/> */}
//         </Routes>
//       </Router>
//   )
// }

// export default App

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/imageSlider/ImageSlider";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MenProducts from "./components/Shop/Men";
import WomenProducts from "./components/Shop/Women";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contacts/Contact";
import Cart from "./components/Bag/Cart";
import { CartProvider } from "./components/Bag/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar />
                <ImageSlider />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                {/* <Header /> */}
                <Navbar />
                <About />
              </>
            }
          />
          <Route
            path="/shop/men"
            element={
              <>
                {/* <Header /> */}
                <Navbar />
                <MenProducts />
              </>
            }
          />
          <Route
            path="/shop/women"
            element={
              <>
                {/* <Header /> */}
                <Navbar />
                <WomenProducts />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                {/* <Header /> */}
                <Navbar />
                <Blogs />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                {/* <Header /> */}
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                {/* <Header /> */}
                <Navbar />
                <Cart />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
