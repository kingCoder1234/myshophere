import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartDashboard from "./CartDashboard";
import CartProductDetails from "./CartProductDetails";
import {
  handleQuantity,
  removeCartProduct,
} from "../../redux/actions/cartActions";

const withWrapper = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cart = useSelector((state) => state.cart.cart);

    useEffect(() => {
      setLoading(false);
    }, [loading, error]);

    const updateLoading = (isLoading) => {
      setLoading(isLoading);
    };

    const updateError = (errorMessage) => {
      setError(errorMessage);
    };

    if (loading) {
      return (
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    const handleProductQuantity = (productId, change) => {
      dispatch(handleQuantity(productId, change));
    };
    const handleRemoveProduct = (id) => {
      dispatch(removeCartProduct(id));
    };
    const handleBuyProduct=(price)=>{
      alert("Thank you, Order placed Successfully to your address $"+ price)
    }

    return (
      <div>
        <WrappedComponent
          {...props}
          cart={cart}
          handleProductQuantity={handleProductQuantity}
          handleRemoveProduct={handleRemoveProduct}
          updateLoading={updateLoading}
          updateError={updateError}
          handleBuyProduct={handleBuyProduct}
        />
      </div>
    );
  };
};

const WrappedCartDashboard = withWrapper(CartDashboard);
const WrappedCartProductDetails = withWrapper(CartProductDetails);

const CartHigherOrderComponent = () => (
  <Routes>
    <Route path="/" element={<WrappedCartDashboard />} />
    <Route path="/:productId" element={<WrappedCartProductDetails />} />
  </Routes>
);

export default CartHigherOrderComponent;
