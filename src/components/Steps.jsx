import React from "react";

const STEPS = ["Type", "Toppings", "Address", "Baking!"];

const Steps = ({ current }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 25%)",
    }}
  >
    {STEPS.map((step, index) => (
      <div
        key={step}
        style={{
          background: index < current ? "lightblue" : "white",
          color: index < current ? "white" : "lightblue",
          fontSize: "20pt",
          fontWeight: "bold",
          borderBottom: "1px solid lightblue",
          textAlign: "center",
        }}
      >
        {step}
      </div>
    ))}
  </div>
);

export default Steps;
