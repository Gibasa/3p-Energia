import "./Faq.css"
import FaqContent from "./FaqContent"
import FaqHeader from "./FaqHeader"
import { Helmet } from "react-helmet-async"

function Faq() {
    return (
        <div className="faq">
            <Helmet>
                <title>Dúvidas Frequentes - 3P Energia</title>
                <meta name="description" content="Tem dúvidas sobre geração de energia ou o mercado livre? Confira nossas perguntas frequentes (FAQ) da 3P Energia." />
            </Helmet>
            <FaqHeader />
            <FaqContent />
        </div>
    )
}

export default Faq