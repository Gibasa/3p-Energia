import "./Card3P.css"
import { Button } from "react-bootstrap"

function Card3P(){
    return(
        <div className="card3P">
            <div className="card3P-text">
                <h2>Vamos conversar?</h2>
                <p>Entre em contato.</p>
                <Button className="card3P-btn">Conheça a 3P</Button>
            </div>
            <img src="/images/3P ENERGIA VERTICAL BRANCO.png" alt="" />
        </div>
    )
}

export default Card3P