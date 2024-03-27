import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import CarouselComponent from "./component/Carousel/CarouselComponent";
import ProductListing from "./component/ProductListing/ProductListing";
import Common from "./component/Common";
import ProductPage from "./component/ProductPage/ProductPage";
import Cart from "./component/Cart/Cart";
import { Provider } from 'react-redux';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Common />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
