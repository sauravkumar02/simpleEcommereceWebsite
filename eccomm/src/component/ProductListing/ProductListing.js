import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ searchQuery }) => {
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredMens, setFilteredMens] = useState([]);
  const [filteredWomens, setFilteredWomens] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let headersList = {};

    let response = await fetch("http://localhost:3001/api/products", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    const mensProducts = data.filter((product) => product.category === "mens");
    const womensProducts = data.filter(
      (product) => product.category === "womens"
    );

    setMens(mensProducts);
    setWomens(womensProducts);
    setFilteredProducts(data);
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = mens.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const filteredWomen = womens.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredWomens(filteredWomen);
      setFilteredMens(filtered);
    } else {
      setFilteredMens(mens);
      setFilteredWomens(womens);
    }
  }, [searchQuery, mens]);

  console.log(mens);

  return (
    <>
      <div className="container mx-auto ">
        <h2 className="text-2xl font-bold mb-4 ml-24">Mens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-24">
          {filteredMens.map((product) => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <div className="bg-white p-2 shadow-lg rounded-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="object-cover"
                    width={500}
                    height={600}
                  />
                </div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-green-600 mb-2">
                  <b>Rs {product.price}</b>
                </p>
                {/* <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                Add to Cart
              </button> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4 ml-24">Womens </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-24">
          {filteredWomens.map((product) => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <div className="bg-white p-2 shadow-lg rounded-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-green-600 mb-2">
                  <b>Rs {product.price}</b>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
