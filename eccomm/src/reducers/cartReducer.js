import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     products: [...state.products, action.payload],
    //   };
    case ADD_TO_CART:
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity +=
          action.payload.quantity;
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
