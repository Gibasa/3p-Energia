import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/layout/Header";
import Home from "./assets/components/layout/home/Home";
import Portfolio from "./assets/components/layout/portfolio/Portfolio"
import PoliticaEGestao from "./assets/components/layout/politicaegestao/PoliticaEGestao"
import Contato from "./assets/components/layout/contato/Contato"
import Footer from "./assets/components/layout/Footer";
import Faq from "./assets/components/layout/faq/Faq";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/politicaegestao" element={<PoliticaEGestao />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
