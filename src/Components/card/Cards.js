import React from "react";
import "./Cards.css";

export const Cards = ({ item }) => {
  return (
    <div class="card">
      <img src={item.imageUrl} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>See Details</button>
      </div>
    </div>
  );
};
