import React from "react";
import "./Cards.css";

export const Cards = ({ images, title, type, description }) => {
  return (
    <div class="card">
      <img src={images} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>Type: {type}</h3>
        <p>{description}</p>
        <button>See Details</button>
      </div>
    </div>
  );
};
