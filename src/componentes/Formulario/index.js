import "./Formulario.css";

import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";
import CampoTexto from "../CampoTexto";

import { useState } from 'react'

const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [campeao, setCampeao] = useState('')
  const [imagem, setImagem] = useState('')
  const [lane, setLane] = useState('')

  /* Prevenindo comportamento padrão */

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoJogadorCadastrado({
        nome,
        campeao,
        imagem,
        lane
    })
    setNome('')
    setCampeao('')
    setImagem('')
    setLane('')
}


  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Digite seu NickName:"
          placeholder="Ex:TenuousPluto"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Campeão:"
          placeholder="Jhin, Katarina, Darius..."
          valor={campeao}
          aoAlterado={valor => setCampeao(valor)}
        />
        <CampoTexto
          label="Imagem: (deve acompanhar extensões .png, .jpg, .webp...)"
          placeholder="https://dominio/jhin.png"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Escolha sua Lane:"
          itens={props.equipes}
          valor={lane}
          aoAlterado={valor => setLane(valor)}
        />
        {/* Chidren */}
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
