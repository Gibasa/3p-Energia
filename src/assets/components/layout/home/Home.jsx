import "./Home.css"
import Banner from "./Banner"
import Servicos from "./Servicos"
import QuemSomos from "./QuemSomos"
import Linha from "./Linha"

function Home(){
    return(
        <div>
            <Banner />
            <Servicos/>
            <QuemSomos/>
            <Linha />
        </div>
    )
}

export default Home