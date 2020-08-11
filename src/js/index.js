import "../style/style.css";
import React from "react";
import ReactDOM from "react-dom";

export default function Container() {
  return (
    <div className="main-container">
      <h2>Hello application!</h2>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Container />, root);
