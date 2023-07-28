import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/layout/Header";
import Home from "./assets/components/layout/home/Home";
import Portfolio from "./assets/components/layout/portfolio/Portfolio"
import PoliticaEGestao from "./assets/components/layout/politicaegestao/PoliticaEGestao"
import Contato from "./assets/components/layout/contato/Contato"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/politicaegestao" element={<PoliticaEGestao />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
