import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards"
import PortfolioHeader from "./PortfolioHeader"
import PortfolioForm from "./PortfolioForm"

function Portfolio(){
    return(
        <div className="portfolio">
            <PortfolioHeader/>
            <PortfolioCards/>
            <PortfolioForm/>
        </div>
    )
}

export default Portfolio