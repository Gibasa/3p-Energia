import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards"
import PortfolioHeader from "./PortfolioHeader"
import Form from "../Form"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Sem dependências

    return (
        <div className="portfolio">
            <Helmet>
                <title>Portfólio de Obras e Projetos - 3P Energia</title>
                <meta name="description" content="Conheça nosso portfólio de usinas solares, subestações e manutenção de sistemas elétricos." />
            </Helmet>
            <PortfolioHeader />
            <PortfolioCards />
            <Form />
        </div>
    )
}

export default Portfolio