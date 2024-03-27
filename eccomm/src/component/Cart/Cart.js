import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { removeFromCart } from "../../constants/cartActions";

const Cart = ({ productsInCart, removeFromCart }) => {
  const handleDeleteProduct = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto m-8">
        <h2 className="text-2xl font-bold mb-4 m-8">Shopping Cart</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-8">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">${product.price}</td>
                  <td className="py-2 px-4">{product.quantity}</td>
                  <td className="py-2 px-4">
                    ${product.price * product.quantity}
                  </td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end m-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productsInCart: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
