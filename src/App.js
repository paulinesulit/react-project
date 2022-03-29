import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Horoscope from "./components/Horoscope.js";
import Home from "./components/Home.js";

import "./styles/styles.css";
import "animate.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sign" element={<Horoscope />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
