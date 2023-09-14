import "./Linha.css";
import { useEffect } from "react";

const data = [
  {
    year: 2016,
    title: "Formação da Civil Eco",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
  {
    year: 2017,
    title: "Plano de Locação",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
  {
    year: 2018,
    title: "Braskem (3P)/Entrada dos Sócios",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
  {
    year: 2019,
    title: "Projeto Bônus Solar",
    subtitulo: "Neoenergia",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
  {
    year: 2020,
    title: "Usina 3.4MWp",
    subtitulo: "(Petrolina)",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
  {
    year: 2021,
    title: "Escolas Públicas",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
  {
    year: 2022,
    title: "12 Usinas + 30MWp",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magni ipsa nesciunt quasi aut amet beatae accusantium consequuntur placeat error, nam autem corporis, rem facere cupiditate odit impedit! Ipsa, reiciendis!",
  },
 
];

function Linha() {
  function handleScroll() {
    const qs = (selector, all = false) => {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    };

    const sections = qs(".section", true);
    const timeline = qs(".timeline");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler() {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });
      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div id="linha-do-tempo" className="container">
      <div className="top-section">
        <h1>Linha do Tempo</h1>
      </div>
      <div className="timeline">
        <div className="line"></div>
        {data.map((item, index) => (
          <div className="section" key={index}>
            <div className="left">
              <h2>{item.year}</h2>
              <h3>{item.title}</h3>
              <p>{item.subtitulo}</p>
            </div>
            <div className="middle">
              <div className="bead"></div>
            </div>
            <div className="right">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Linha;
