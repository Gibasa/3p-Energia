import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards"
import PortfolioHeader from "./PortfolioHeader"
import Form from "../Form"
import { useEffect } from "react"

function Portfolio(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Sem dependências
      
    return(
        <div className="portfolio">
            <PortfolioHeader/>
            <PortfolioCards/>
            <Form/>
        </div>
    )
}

export default Portfolio