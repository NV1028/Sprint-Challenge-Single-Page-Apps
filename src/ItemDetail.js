import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://rickandmortyapi.com/api/character/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <Card>
      <div className="App">
        <h1>{item.name}</h1>
        <img src={item.image} alt="" />
        <h3>{item.species}</h3>
      </div>
    </Card>
  );
}

export default ItemDetail;
