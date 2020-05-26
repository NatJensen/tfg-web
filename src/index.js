// packages
import React from "react";
import ReactDOM from "react-dom";

// context
import { GiantProvider } from "./context/GiantContext.js";

// components
import App from "./App";

// styling
import "./index.css";

/* Start of app */
const app = (
  <GiantProvider>
    <App />
  </GiantProvider>
);

ReactDOM.render(app, document.getElementById("root"));
