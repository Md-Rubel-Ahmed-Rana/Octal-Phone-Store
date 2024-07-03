import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../../Shared/Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://octal-phone-server.vercel.app/categories")
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="py-5 my-16 mx-5 lg:px-40 rounded-md">
      <h3 className="text-2xl text-center mb-5">Select your best Brand</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 text-center mx-auto">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="card bg-[#F2f2f2] overflow-hidden shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={product.img}
                  alt="category"
                  className="rounded-xl w-full h-40"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <div className="flex gap-2 lg:gap-5">
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Total customer</div>
                      <div className="stat-value">50,00</div>
                    </div>
                  </div>
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Order Placed</div>
                      <div className="stat-value">4,000</div>
                    </div>
                  </div>
                </div>
                <div className="card-actions">
                  <Link to={`/category/${product.category_id}`}>
                    <button className="btn btn-primary">Explore More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
