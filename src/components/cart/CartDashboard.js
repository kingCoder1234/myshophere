import React from "react";
import { Link } from "react-router-dom";

const CartDashboard = ({
  handleProductQuantity,
  handleRemoveProduct,
  handleBuyProduct,
  cart,
}) => {
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div>
      <h2 className="text-center">Cart Products </h2>
      <h4 className="text-center">
        Total Price: ${totalPrice.toFixed(2)}
        <button
          className="btn btn-primary ml-2"
          onClick={() => handleBuyProduct(totalPrice.toFixed(2))}
        >
          Buy
        </button>
      </h4>
      {cart.length === 0 ? (
        <div className="d-flex flex-column justify-content-center text-center py-5">
          <h3>No products are added yet</h3>
          <Link to={"/products"} style={{ fontSize: "25px" }}>
            <i className="fa fa-arrow-circle-left"></i>continue to shopping
          </Link>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {cart.map((product) => {
              if (!product || typeof product !== "object") {
                return null;
              }
              const { id, title, image, price, category, description } =
                product;
              return (
                <div className="col-md-4 mb-4 px-4" key={id}>
                  <Link to={`/cart/${id}`} className="text-decoration-none">
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image p-5">
                          <img
                            src={image}
                            alt={title}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">${price}</p>
                          <p className="card-text">{category}</p>
                          <p className="card-text">
                            {description.slice(1, 80)}+{"..."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="d-flex justify-content-center m-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleProductQuantity(product.id, -1)}
                    >
                      -
                    </button>
                    <h5 className="mx-2">{product.quantity}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleProductQuantity(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex justify-content-between m-3">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleBuyProduct(product.price * product.quantity)
                      }
                    >
                      Buy
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDashboard;
