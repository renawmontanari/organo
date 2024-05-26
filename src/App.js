import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicioando = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicioando(colaborador)} 
      />
      <Time nome="Programação" />
      <Time nome="Frontend" />
      <Time nome="Data Science" />
      <Time nome="Devops" />
      <Time nome="UX e Design" />
      <Time nome="Mobile" />
      <Time nome="Inovação e Gestão" />
    </div>
  );
};

export default App;