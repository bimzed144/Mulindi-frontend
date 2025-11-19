import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/index.css';
import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins"; // Defaults to weight 400


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
