import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { addToCart } from "../../constants/cartActions";
import { useParams } from "react-router-dom";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      let headersList = {};

      let response = await fetch(`http://localhost:3001/api/products/${id}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      setProduct(data.product[0]);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  console.log(product);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        quantity,
      };
      addToCart(productToAdd);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      {product && (
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <img
                src={product.imageURL}
                alt="Product"
                className="w-64 h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <div className="flex items-center my-4">
                <label htmlFor="size" className="mr-2">
                  Size:
                </label>
                <select
                  name="size"
                  id="size"
                  className="px-2 py-1 border border-gray-300 rounded-md"
                  value={size}
                  onChange={handleSizeChange}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div className="flex items-center my-4">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <select
                  name="quantity"
                  id="quantity"
                  className="px-2 py-1 border border-gray-300 rounded-md"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-semibold">
                  Rs.{product.price}
                </span>
                <span className="ml-4 text-green-500">
                  {product.discount}% Off
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-32"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="m-8">
            <h3 className="text-xl font-semibold">Product Description</h3>
            <p className="mt-2">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    // removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  };
};

export default connect(null, mapDispatchToProps)(ProductPage);
