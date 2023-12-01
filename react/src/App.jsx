import { useState } from "react";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Book from "./Pages/Book";
import Error from "./Pages/Error";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {


  return (

    <>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            {/* add props nga mu get from shop */}
          </div>
        </div>
        <BrowserRouter>
    
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="shop" element={<Shop />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="book" element={<Book />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
              <Route path="signup" element={<SignUp/>}></Route>
              <Route path="login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
