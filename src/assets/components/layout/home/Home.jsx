import "./Home.css"
import Banner from "./Banner"
import Servicos from "./Servicos"
import QuemSomos from "./QuemSomos"
import Linha from "./Linha"
import Mapa from "./Mapa"
import Clientes from "./Clientes"
import Video from "./Video"
import CarouselComponent from "./Carousel"

function Home(){
    return(
        <div>
            <Banner />
            <Servicos/>
            <QuemSomos/>
            <Linha />
            <Mapa/>
            <Clientes/>
            <Video/>
            <CarouselComponent/>
        </div>
    )
}

export default Home