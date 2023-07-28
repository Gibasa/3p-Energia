import "./Clientes.css";

function Clientes() {
    const numeros = Array.from({length: 35}, (v, i) => i + 1);
    const imagens = numeros.map(n => (
      <img src={`/images/clientes/${n}.png`} alt={`Imagem ${n}`} key={n} />
    ));
    
    return (
    <div className="clientes">
        <h2>Nossos Clientes:</h2>
        <div className="clientes-images">
         {imagens}
         </div>
    </div>
  );
}

export default Clientes;
