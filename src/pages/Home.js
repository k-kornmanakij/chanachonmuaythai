import React from "react";
import { InstagramCard } from "../Components/InstagramCard";
import Carousel from "../Components/Carousel";
import "../styles.css";

const Home = () => {
  return (
    <div>
      <Carousel />
      <h1
        style={{
          fontSize: "4.4rem",
          color: "#263c91",
          paddingTop: "30px",
          borderTop: "5px solid #acacac",
        }}
      >
        UPDATE
      </h1>
      <InstagramCard />
    </div>
  );
};

export default Home;
