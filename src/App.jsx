import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/layout/Header";
import Home from "./assets/components/layout/home/Home";
import Portfolio from "./assets/components/layout/portfolio/Portfolio"
import PoliticaEGestao from "./assets/components/layout/politicaegestao/PoliticaEGestao"
import Contato from "./assets/components/layout/contato/Contato"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {homepage} from "../package.json"

function App() {
  return (
    <div className="app">
      <Router basename={homepage}>
        <Header />
        <Routes>
          <Route path="3p-Energia" element={<Home />}></Route>
          <Route path="3p-Energia/portfolio" element={<Portfolio />}></Route>
          <Route path="3p-Energia/politicaegestao" element={<PoliticaEGestao />}></Route>
          <Route path="3p-Energia/contato" element={<Contato />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
