import "./Home.css"
import Banner from "./Banner"
import Servicos from "./Servicos"
import QuemSomos from "./QuemSomos"
import Linha from "./Linha"
import Mapa from "./Mapa"
import Clientes from "./Clientes"
import Video from "./Video"
import CarouselComponent from "./Carousel"
import Card3P from "./Card3P"

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
            <Card3P/>
        </div>
    )
}

export default Home