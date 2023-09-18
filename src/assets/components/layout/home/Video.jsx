import "./Video.css"

function Video(){
    const iframe = (
        <iframe
          src="https://www.youtube.com/embed/jfanAQNGw7w?autoplay=1&start=2"
          width="560"
          height="315"
          
        />
      );
    return(
        <div className="video">
           {iframe}
            <div className="video-text">
                <h2>EPC</h2>
                <p>Usina Solar PE II</p>
                <div className="video-btn">Conheça nosso portfólio</div>
            </div>
        </div>
    )
}

export default Video