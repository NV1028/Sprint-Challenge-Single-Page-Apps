import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Item() {
  useEffect(() => {
      fetchItem();
  }, []);

  const [item, setItem] = useState({});

const fetchItem = async () => {
    const fetchItem = await fetch(``)
    const item = await fetchItem.json();

    console.log(item);
}

  return (
    <div className="App">
      <h1>Item</h1>
    </div>
  );
}

export default Item;