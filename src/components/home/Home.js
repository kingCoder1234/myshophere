import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Userform from "../user/Userform";

const Home = () => {
  return (
    <div>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="jumbotron jumbotron-fluid homeJumbotron">
          <div className=" text-container1 ">
            <h1 className="display-4" style={{ fontWeight: "bold" }}>
              Hello, Welcome to Our Website
            </h1>
            <p className="lead">
              Discover the latest trends and elevate your style with our
              high-quality products.
            </p>
            <Link to="/products" className="btn btn-primary">
              Shoping here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
