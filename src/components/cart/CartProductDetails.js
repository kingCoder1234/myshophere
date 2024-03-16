import React from "react";
import { useParams } from "react-router";

const CartProductDetails = ({ handleProductQuantity, cart,handleBuyProduct }) => {
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const { productId } = useParams();

  const cartItem = cart.find((product) => product.id === parseInt(productId));
  const handlebuy = (price) => {
    alert(price);
  };
  return (
    <div>
      <h4 className="text-center my-5">
        Total Price: ${totalPrice.toFixed(2)}
        <button
          className="btn btn-primary ml-2"
          onClick={() => handleBuyProduct(totalPrice.toFixed(2))}
        >
          Buy
        </button>
      </h4>
      {cartItem ? (
        <div className="ui placeholder segment container">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp" style={{ width: "40%" }}>
                <img
                  className="product-img rounded float-left"
                  src={cartItem.image}
                  alt={cartItem.title}
                  style={{ width: "80%", padding: "20px" }}
                />
              </div>
              <div className="column rp py-4" style={{ width: "60%" }}>
                <h3>{cartItem.title}</h3>
                <h3>
                  <a className="ui teal tag label">${cartItem.price}</a>
                </h3>
                <h4 className="ui brown block header">{cartItem.category}</h4>
                <p>{cartItem.description}</p>
                <div className="ui vertical animated" tabIndex="0">
                  <div className="d-flex justify-content-center">
                    <div className="mx-3">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleProductQuantity(cartItem.id, -1)}
                      >
                        -
                      </button>
                    </div>
                    <div className="mx-3">
                      <h3>{cartItem.quantity}</h3>
                    </div>
                    <div className="mx-3">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleProductQuantity(cartItem.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleBuyProduct(cartItem.price * cartItem.quantity)
                      }
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProductDetails;
