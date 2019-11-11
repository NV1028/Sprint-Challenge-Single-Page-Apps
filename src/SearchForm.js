import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const people = [
  {
    id: 1,
    first: "Rick Sanchez"
  },
  {
    id: 2,
    first: "Morty Smith"
  },
  {
    id: 3,
    first: "Summer Smith"
  },
  {
    id: 4,
    first: "Beth Smith"
  },

  {
    id: 5,
    first: "Jerry Smith"
  },
  {
    id: 6,
    first: "Abadango Cluster Princess"
  },
  {
    id: 7,
    first: "Abradolf Lincler"
  },
  {
    id: 8,
    first: "Adjudicator Rick"
  },

  {
    id: 9,
    first: "Agency Director"
  },
  {
    id: 10,
    first: "Alan Rails"
  },
  {
    id: 11,
    first: "Albert Einstein"
  },
  {
    id: 12,
    first: "Alexander"
  },

  {
    id: 13,
    first: "Alien Googah"
  },
  {
    id: 14,
    first: "Alien Morty"
  },
  {
    id: 15,
    first: "Alien Rick"
  },
  {
    id: 16,
    first: "Amish Cyborg"
  },

  {
    id: 17,
    first: "Annie"
  },
  {
    id: 18,
    first: "Antenna Morty"
  },
  {
    id: 19,
    first: "Antenna Rick"
  },
  {
    id: 20,
    first: "Ants in my Eyes Johnson"
  }
];
function searchingFor(term) {
  return function(x) {
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

//api call and generate array for search/render
// function List() {
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const [items, setItems] = useState([]);

//   const fetchItems = async () => {
//     const data = await fetch("https://rickandmortyapi.com/api/character/");

//     const items = await data.json();
//     console.log(items.results);
//     setItems(items.results);
//   };
//   return (
//     <div className="App">
//       <h1>Characters Page</h1>
//       {items.map(item => (
//         <h6 key={item.id}>
//           <Link to={`/character/${item.id}`}>{item.name}</Link>
//         </h6>
//       ))}
//     </div>
//   );
// }

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: people,
      term: ""
    };

    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    console.log(event.target);
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.searchHandler} />
        </form>
        {this.state.people.filter(searchingFor(this.state.term)).map(person => (
          <div key={person.id}>
            <h6>{person.first}</h6>
          </div>
        ))}
      </div>
    );
  }
}
export default Search;
