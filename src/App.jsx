import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import Header from "./assets/components/layout/Header";
import Footer from "./assets/components/layout/Footer";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./assets/components/layout/home/Home"));
const Portfolio = lazy(() => import("./assets/components/layout/portfolio/Portfolio"));
const PoliticaEGestao = lazy(() => import("./assets/components/layout/politicaegestao/PoliticaEGestao"));
const Contato = lazy(() => import("./assets/components/layout/contato/Contato"));
const Faq = lazy(() => import("./assets/components/layout/faq/Faq"));


function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Router>
          <Header />
          <Suspense fallback={<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#047060' }}>Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/politicaegestao" element={<PoliticaEGestao />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/contato" element={<Contato />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
