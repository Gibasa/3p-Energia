import "./PoliticaEGestao.css"
import PEGHeader from "./PEGHeader"
import PEGContent from "./PEGContent"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react";

function PoliticaEGestao() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Sem dependências

    return (
        <div>
            <Helmet>
                <title>Política e Gestão - 3P Energia</title>
                <meta name="description" content="Conheça as políticas de qualidade, segurança do trabalho e responsabilidade socioambiental da 3P Energia." />
            </Helmet>
            <PEGHeader />
            <PEGContent />
        </div>
    )
}

export default PoliticaEGestao