import React, { useEffect, useState } from "react";
import Records from "./Records.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";

function App() {
  const [records, setRecords] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("/api/records")
      .then((res) => res.json())
      .then((records) => {
        console.log(records);
        setRecords(records);
      });
  }, []);

  const handleAddToCart = (album) => {
    fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(album),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Added to cart:", data);
        setItems([...items, data]);
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        // Handle the error if needed
      });
  };

  return (
    <div className="home-page">
      <Header />
      <div className="container">
        <div className="music-container">
          <Records records={records} handleAddToCart={handleAddToCart} />
        </div>
        <Cart items={items} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
