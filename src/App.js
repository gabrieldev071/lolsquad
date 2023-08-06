import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner";
import Rodape from "./componentes/Rodape";
/* Utilizando API uuid para gerar um id único para cada item das equipes */
import { v4 as uuidv4 } from "uuid";

//macete para importa o index das pastas
import Jogador from "./componentes/Jogador";

function App() {
  const equipes = [
    {
      id: uuidv4(),
      nome: "Top",
      corPrimaria: "#F0F0F0",
      corSegundaria: "#278ea5",
    },
    {
      id: uuidv4(),
      nome: "Mid",
      corPrimaria: "#F0F0F0",
      corSegundaria: "#F12B15",
    },
    {
      id: uuidv4(),
      nome: "Bot",
      corPrimaria: "#F0F0F0",
      corSegundaria: "#2f89fc",
    },
    {
      id: uuidv4(),
      nome: "Jungle",
      corPrimaria: "#0A323C",
      corSegundaria: "#21e6c1",
    },
    {
      id: uuidv4(),
      nome: "Jogo em qualquer lane!",
      corPrimaria: "#F0F0F0",
      corSegundaria: "#40514e",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
    console.log(Jogador);
  };
  /* 
  function deletarJogador(id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id))
    console.log(id);
    console.log(jogadores);
  } */

  return (
    <div className="App">
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
          jogadores={jogadores.filter((jogador) => jogador.lane == lane.nome)}
          /*           aoDeletar={deletarJogador} */
        />
      ))}
      <Rodape />
    </div>
    
  );
}

export default App;
