import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {

  const cssCorDoCard = {backgroundColor: props.corDoCard}
  const cssCorDoFundo  = {borderColor: props.corDoFundo}

  return (
    (props.colaboradores.length > 0) ?
    <section className="time" style={cssCorDoCard}>
      <h3 style={cssCorDoFundo}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
    : ''
  );  
};

export default Time;
