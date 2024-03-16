import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct } from "../../redux/actions/productActions";

const ProductDetails = ({ handleAddToCart }) => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (response.status === 200) {
          dispatch(selectedProduct(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [dispatch, productId]);

  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="d-flex justify-content-center my-4">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <h2 className="text-center">Product Details</h2> */}
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp" style={{ width: "40%" }}>
                <img
                  className="product-img rounded float-left"
                  src={product.image}
                  alt={product.title}
                  style={{ width: "80%", padding: "20px" }}
                />
              </div>
              <div className="column rp py-4" style={{ width: "60%" }}>
                <h3>{product.title}</h3>
                <h3>
                  <a className="ui teal tag label">${product.price}</a>
                </h3>
                <h4 className="ui brown block header">{product.category}</h4>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div
                    className="visible content btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
