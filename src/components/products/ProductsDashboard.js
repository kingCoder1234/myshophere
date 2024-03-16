import React from "react";
import { Link } from "react-router-dom";

const ProductsDashboard = ({ products, handleAddToCart }) => {
  const renderList = products.map((product) => {
    const { id, title, image, price, category, description } = product;
    return (
      <div className="col-lg-4 col-md-4 col-sm-6 mb-4 py-4" key={id}>
        <Link to={`/products/${id}`} className="text-decoration-none">
          <div className="card h-100">
            <img src={image} alt={title}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">${price}</p>
              <p className="card-text">{category}</p>
              <p className="card-text">
                {description.slice(1, 80)}+{"..."}
              </p>
            </div>
          </div>
        </Link>
        <div className="card-footer d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        {products.length > 0 ? (
          <div className="row">{renderList}</div>
        ) : (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDashboard;
