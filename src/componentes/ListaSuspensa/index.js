import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
      >
         <option value=""seLected>Selecione aqui</option>
        {/* método de inteiração com map [array do javascript] */}
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
