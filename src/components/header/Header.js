import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="my-navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bold", fontSize: "23px" }}
        >
          ShopHere
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/products">
                Shopping
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0 text-center">
            <Link className="mr-sm-2 d-flex flex-column text-decoration-none text-dark" to="/profile">
              <i className="fa fa-user" style={{ fontSize: "25px" }}></i>
              <h6>{user && user.name}</h6>
            </Link>
            <Link
              className="fa fa-shopping-cart"
              to="/cart"
              style={{ fontSize: "25px", color: "black" }}
            ></Link>
            <span className="my-badge badge">{cart.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
