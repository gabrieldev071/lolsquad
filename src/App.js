import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner";

//macete para importa o index das pastas
import Jogador from "./componentes/Jogador";

function App() {
  const equipes = [
    {
      nome: "Top",
      corPrimaria: "#F0F0F0",
      corSegundaria: "#CED7F7",
    },
    {
      nome: "Mid",
      corPrimaria: "#F12B15",
      corSegundaria: "#D13639",
    },
    {
      nome: "Bot",
      corPrimaria: "#0AC8B9",
      corSegundaria: "#0397AB",
    },
    {
      nome: "Jungle",
      corPrimaria: "#0A323C",
      corSegundaria: "#091428",
    },
    {
      nome: "Jogo em qualquer lane!",
      corPrimaria: "#C8AA6E",
      corSegundaria: "#C89B3C",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
    console.log(Jogador)
  }

  function deletarJogador(params) {
    console.log("deletando jogador");
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        equipes={equipes.map((lane) => lane.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />

      {/* usando map para percorrer o array pleaers quer executa uma função onde cria um componente com o nome dentro do array */}
      
      {equipes.map((lane) => (
        <Jogador
          key={lane.nome}
          nome={lane.nome}
          valor={lane.nome}
          corPrimaria={lane.corPrimaria}
          corSegundaria={lane.corSegundaria}
          jogadores={jogadores.filter(jogador => jogador.lane == lane.nome)}
          aoDeletar={deletarJogador}
          />
      ))}
    
    </div>
  );
}

export default App;
