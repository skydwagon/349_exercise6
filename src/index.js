import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Container from "./calculator/Calculator"; 

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Container />
  </StrictMode>
);