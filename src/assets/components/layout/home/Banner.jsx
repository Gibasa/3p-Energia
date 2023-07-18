import { Button } from "react-bootstrap";
import "./Banner.css"

function Banner() {
  return (
    <div className="banner">
      <h2>
        Engenharia em <br /> Energia Solar.
      </h2>
      <Button className=" btn-sm home-btn ">Conheça a 3P</Button>
    </div>
  );
}

export default Banner;
