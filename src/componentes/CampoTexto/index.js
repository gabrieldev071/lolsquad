import "./CampoTexto.css";

/* props, vem de propriedades */
const CampoTexto = (props) => {

  const placeholderModificada = `${props.placeholder}`;

  const aoDigitado = (evento) => {
    //target é um evento do javascript
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>
        {props.label}
      </label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
