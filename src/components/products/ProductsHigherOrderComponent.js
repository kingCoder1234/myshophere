import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";
import ProductsDashboard from "./ProductsDashboard";
import { removeSelectedProduct, setProducts } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const withWrapper = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const products = useSelector((state) => state.allProducts.products);

    // useEffect(() => {
    //   axios
    //     .get("http://localhost:5000/api/products")
    //     .then((response) => {
    //       dispatch(setProducts(response.data));
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       setError(error.message);
    //       setLoading(false);
    //     });
    // }, []);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          if (response.status === 200) {
            dispatch(setProducts(response.data));
            setLoading(false);
          }
        } catch (error) {
          console.error(error);
          setError(error.message);
          setLoading(false);
        }
      };
      fetchProducts();
      return () => {
        dispatch(removeSelectedProduct());
      };
    }, [dispatch]);

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

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

    return (
      <div>
        <WrappedComponent {...props} products={products} handleAddToCart={handleAddToCart} />
      </div>
    );
  };
};

const WrappedProductsDashboard = withWrapper(ProductsDashboard);
const WrappedProductDetails = withWrapper(ProductDetails);

const ProductsHigherOrderComponent = () => (
  <Routes>
    <Route path="/" element={<WrappedProductsDashboard />} />
    <Route path="/:productId" element={<WrappedProductDetails />} />
  </Routes>
);

export default ProductsHigherOrderComponent;
