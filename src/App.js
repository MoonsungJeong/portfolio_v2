import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./parts/header";
import Footer from "./parts/footer";
import Background from "./parts/background";

import Home from "./routes/home";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import CV from "./routes/cv";
import Notfound from "./routes/notfound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>
      <Background></Background>
    </div>
  );
}

export default App;
