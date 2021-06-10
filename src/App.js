import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const sumarNumero = () => {
    if (numero === 10) {
      const nuevoMensaje = "La avaricia rompe el saco";
      setMensaje(nuevoMensaje);
      return;
    }
    const nuevoMensaje = "";
    setMensaje(nuevoMensaje);
    setNumero(numero + 1);
  };
  const restarNumero = () => {
    if (numero === 0) {
      const nuevoMensaje = "Será mejor espavilar";
      setMensaje(nuevoMensaje);
      return;
    }
    const nuevoMensaje = "";
    setMensaje(nuevoMensaje);
    setNumero(numero - 1);
  };
  return (
    <>
      <div className="contenedor">
        <button className="boton" onClick={restarNumero}>
          -
        </button>
        <input type="number" className="input-numero" disabled value={numero} />
        <button className="boton" onClick={sumarNumero}>
          +
        </button>
        <div>
          <p className="mensaje">{mensaje}</p>
        </div>
      </div>
    </>
  );
}

export default App;
