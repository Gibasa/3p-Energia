import "./Clientes.css";

function Clientes() {
    const numeros = Array.from({length: 35}, (v, i) => i + 1);
    const imagens = numeros.map(n => (
      <img src={`/src/assets/img/clientes/${n}.png`} alt={`Imagem ${n}`} key={n} />
    ));
    
    return (
    <div className="clientes">
        <h2>Nossos Clientes:</h2>
        <div className="images">
         {imagens}
         </div>
    </div>
  );
}

export default Clientes;
