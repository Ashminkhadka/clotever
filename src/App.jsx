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
import {WishlistProvider} from "./components/Wishlist/Context"
import Footer from "./components/Footer/Footer";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/Register";
import Wishlist from "./components/Wishlist/Wishlist";
// import Profile from './components/Account/Profile'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={
              <>
                <Header />
                <Navbar />
                <ImageSlider />
                <Home />
                <Footer/>
              </>
            }
          />
          <Route path="/about" element={
              <>
                {/* <Header /> */}
                <Navbar />
                <About />
                <Footer/>
              </>
            }
          />
          <Route path="/shop/men" element={
              <>
                {/* <Header /> */}
                <Navbar />
                <MenProducts />
                <Footer/>
              </>
            }
          />
          <Route path="/shop/women" element={
              <>
                {/* <Header /> */}
                <Navbar />
                <WomenProducts />
                <Footer/>
              </>
            }
          />
          <Route path="/blogs" element={
              <>
                {/* <Header /> */}
                <Navbar />
                <Blogs />
                <Footer/>
              </>
            }
          />
          <Route path="/contact" element={
              <>
                {/* <Header /> */}
                <Navbar />
                <Contact />
                <Footer/>
              </>
            }
          />
          <Route path="/cart" element={
              <>
                {/* <Header /> */}
                <Navbar />
                <Cart />
                <Footer/>
              </>
            }
          />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<SignUp />} />
           <Route path="/wishlist" component={Wishlist} />
           {/* <Route path="/profile" element={<Profile />} /> */}

        </Routes>
        <ToastContainer />
      </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
