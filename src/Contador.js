import { useState, useEffect  } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumarContador = () => {
    setContador(contador + 1);
  };
  const restarContador = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    console.log('asd')
  },[])

  return (
    <div className="p-auto">
      <button onClick={sumarContador} className="btn">
        Aumentar contador
      </button>
      <button onClick={restarContador} className="btn">Restar contador</button>
      <span className="p-auto">{contador}</span>
    </div>
  );
};

export default Contador;
