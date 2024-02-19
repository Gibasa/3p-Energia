import "./PortfolioCards.css";
import "./PortfolioDiversos";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PortfolioDiversos from "./PortfolioDiversos";
import PortfolioEpc from "./PortfolioEpc";

function PortfolioCards() {
  const [selectedLink, setSelectedLink] = useState("epc");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className="portfolio-cards">
      <div className="portfolio-menu">
        <div
          className={`portfolio-menu-link ${selectedLink === "epc" ? "selected" : ""}`}
          onClick={() => handleLinkClick("epc")}
        >
          <div className="title">EPC</div>
          <span></span>
        </div>
        <div
          className={`portfolio-menu-link ${
            selectedLink === "diversos" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("diversos")}
        >
          <span></span>
          <div className="title">DIVERSOS</div>
        </div>
      </div>
      <div className="portfolio-content">
        <TransitionGroup>
          {selectedLink === "epc" && (
            <CSSTransition
              key="epc"
              timeout={50}
            >
              <PortfolioEpc />
            </CSSTransition>
          )}
          {selectedLink === "diversos" && (
            <CSSTransition
              key="diversos"
              timeout={50}
            >
              <PortfolioDiversos />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default PortfolioCards;
