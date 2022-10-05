import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";

import { BrowserRouter /* Routes, Route, Link  */ } from "react-router-dom";
/* import Home from "./routes/home";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import CV from "./routes/cv"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/cv" element={<CV />}></Route>
    </Routes> */}
  </BrowserRouter>
);
