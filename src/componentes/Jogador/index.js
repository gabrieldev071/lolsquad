import Card from "../Card";
import "./Jogador.css";

const Jogador = (props) => {
  const css = { backgroundColor: props.corSegundaria };

  return (
   (props.jogadores.length > 0) && 
  
   <section className="player" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="players">
        {props.jogadores.map((jogador) => (
          <Card
            corDeFundo={props.corPrimaria}
            key={jogador.nome}
            nome={jogador.nome}
            campeao={jogador.campeao}
            imagem={jogador.imagem}
            idCard={jogador.id}
            /* aoDeletar={props.aoDeletar} */
          />
        ))}
      </div>
    </section>
  ) 
};
export default Jogador;
