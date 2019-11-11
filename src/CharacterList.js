// import React, { useEffect, useState } from "react";

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);

//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//     </section>
//   );
// }

import React, { Component, useState, useEffect } from "react";
import "./App.css";
import {Link} from "react-router-dom";





function CharacterList() {
  useEffect(() => {
    fetchItems();
  }, []);

const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://rickandmortyapi.com/api/character/"
    );

    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };
  return (
  
    <div className="App">
        <h1>Characters Page</h1>
        {items.map(item => (


            <h6 key={item.id}>
               
            <Link to={`/character/${item.id}`}>{item.name}</Link>
            
            </h6>

        ))}
      
    </div>
  );
}

export default CharacterList;
