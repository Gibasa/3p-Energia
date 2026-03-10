import "./Home.css"
import Banner from "./Banner"
import Servicos from "./Servicos"
import CooperadaCoelba from "./CooperadaCoelba"
import QuemSomos from "./QuemSomos"
// import Linha from "./Linha"
import Mapa from "./Mapa"
import Clientes from "./Clientes"
import Video from "./Video"
// import CarouselComponent from "./Carousel"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Sem dependências

    return (
        <div className="home">
            <Helmet>
                <title>3P Energia | Soluções em Energia Solar, BESS e Eficiência</title>
                <meta name="description" content="A 3P Energia é especialista em engenharia consultiva, construção e manutenção de usinas solares e subestações de alta tensão." />
            </Helmet>
            <Banner />
            <QuemSomos />
            <Mapa />
            <Servicos />
            <CooperadaCoelba />
            {/* <Linha /> */}
            <Video />
            <Clientes />
            {/* <CarouselComponent/> */}
        </div>
    )
}

export default Home