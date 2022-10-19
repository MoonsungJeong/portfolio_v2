import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./parts/header";
import Footer from "./parts/footer";
import Background from "./parts/background";

import Home from "./routes/home";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import CV from "./routes/cv";
import Notfound from "./routes/notfound";

function App() {
  const [mode, setMode] = useState("Home");

  return (
    <div className="App">
      <Background path={mode}></Background>
      <Header
        path={mode}
        onChangeMode={(param) => {
          setMode(param);
        }}
      ></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer
        path={mode}
        onChangeMode={(param) => {
          setMode(param);
        }}
      ></Footer>
    </div>
  );
}

export default App;
