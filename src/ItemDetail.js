import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
      fetchItem();
      console.log(match);
  }, []);



  const [item, setItem] = useState({});

const fetchItem = async () => {
    const fetchItem = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
}

  return (
    <div className="App">
      <h1>{item.name}</h1>
      <img src={item.image} alt="" />
    </div>
  );
}

export default ItemDetail;