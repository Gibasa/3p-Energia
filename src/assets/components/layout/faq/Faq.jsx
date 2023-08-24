import "./Faq.css"
import FaqContent from "./FaqContent"
import FaqHeader from "./FaqHeader"

function Faq(){
    return(
        <div className="faq">
            <FaqHeader/>
            <FaqContent/>
        </div>
    )
}

export default Faq