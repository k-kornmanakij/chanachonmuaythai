import React from "react";
import { Paper, Button } from "@mui/material";

export default function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{
          position: "relative",
          width: "100%",
          maxHeight: "80vh",
          objectFit: "cover",
        }}
      />
      {/* <h2>{item.title}</h2>
            <p>{item.description}</p> */}
    </Paper>
  );
}
