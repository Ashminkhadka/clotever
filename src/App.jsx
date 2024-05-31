import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageSlider from './components/imageSlider/ImageSlider';
import Home from './components/Home/Home';
// import About us from './components/About/About'



const App = () => {
  return (
      <Router>
        <Header/>
        <Navbar/>
        <ImageSlider/>
       <Home/>
        <Routes>
           {/* <Route path='/about' element={<About/>}/> */}
         {/* <Route path='/shop' element={<Shop/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/> */}
        </Routes>
      </Router>
  )
}

export default App