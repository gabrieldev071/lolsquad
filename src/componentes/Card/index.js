import "./Card.css"
import { AiFillCloseCircle } from 'react-icons/ai'; 

const Card = (props) => {
    return (
        <div className="jogador">
         {/*    <AiFillCloseCircle className="deletar" 
            onClick={() => aoDeletar(props.id)} /> */}
            <div className="cabecalho">
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className="rodape">
                <h4>NickName: {props.nome}</h4>
                <h5>Campeão: {props.campeao}</h5>
            </div>
        </div>
    )
}

export default Card