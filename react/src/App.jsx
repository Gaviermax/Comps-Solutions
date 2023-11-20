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

function App() {


  return (
    <>
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
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
