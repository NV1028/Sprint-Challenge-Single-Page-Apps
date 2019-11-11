import React from "react";
import "./App.css";
import Nav from "./Nav";
// import About from "./About";
import CharacterList from "./CharacterList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import SearchForm from "./SearchForm";
import SearchFormik from "./SearchFormik";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/home" exact component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/characters" exact component={CharacterList} />
        <Route path="/character/:id" component={ItemDetail} />
        <Route path="/search" component={SearchForm} />
        <Route path="/searchformik" component={SearchFormik} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      
    </header>
);

export default App;
