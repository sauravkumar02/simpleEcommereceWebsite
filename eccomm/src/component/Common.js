import React,{useState} from "react";
import Header from "./Header/Header";
import CarouselComponent from "./Carousel/CarouselComponent";
import ProductListing from "./ProductListing/ProductListing";

const Common = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <CarouselComponent />
      <ProductListing searchQuery={searchQuery} />
    </div>
  );
};

export default Common;
