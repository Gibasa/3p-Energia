import "./PoliticaEGestao.css"
import PEGHeader from "./PEGHeader"
import PEGContent from "./PEGContent"
import { useEffect } from "react";

function PoliticaEGestao(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Sem dependências
      
    return(
        <div>
            <PEGHeader/>
            <PEGContent/>
        </div>
    )
}

export default PoliticaEGestao