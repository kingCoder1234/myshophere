import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import ProductsHigherOrderComponent from "./components/products/ProductsHigherOrderComponent";
import CartHigherOrderComponent from "./components/cart/CartHigherOrderComponent";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useSelector } from "react-redux";
import Userprofile from "./components/user/Userprofile";
import UserForm from "./components/user/Userform";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const [showForm, setshowForm] = useState(true);

  return (
    <div>
      <BrowserRouter>
        {showForm && <UserForm showForm={showForm} setshowForm={setshowForm} />}

        {!showForm && <Header user={user} />}
        <Routes>
          {!showForm && <Route path="/" element={<Home />} />}
          {!showForm && (
            <>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Userprofile user={user} />} />
              <Route
                path="/products/*"
                element={<ProductsHigherOrderComponent />}
              />
              <Route path="/cart/*" element={<CartHigherOrderComponent />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
