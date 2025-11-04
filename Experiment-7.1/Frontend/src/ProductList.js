import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ backgroundColor: "#222", color: "white", minHeight: "100vh", textAlign: "center", padding: "30px" }}>
      <h1>Product List</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              width: "200px",
              padding: "20px",
              backgroundColor: "#333",
            }}
          >
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <button style={{ backgroundColor: "#007bff", color: "white", padding: "8px 16px", border: "none", borderRadius: "5px" }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
