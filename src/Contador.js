import { useState, useEffect } from "react";

const Contador = () => {
  const [contador, setContador] = useState(1);

  const sumarContador = () => {
    setContador(contador + 1);
  };
  const restarContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    console.log("efecto del Contador");
  }, [contador]);

  return (
    <div className="counterContainer">
      <p className="counterLabel">Cantidad </p>
      <button onClick={restarContador} className="btnCounter">
        <span class="material-icons md-18">remove</span>
      </button>
      <span className="counter">{contador}</span>
      <button onClick={sumarContador} className="btnCounter">
        <span class="material-icons md-18">add</span>
      </button>
    </div>
  );
};

export default Contador;
