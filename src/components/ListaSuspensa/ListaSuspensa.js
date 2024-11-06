import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

    const times = props.itens

    const aoEscolher = (evento) => {
        props.aoAdicionar(evento.target.value)
    }

    return(
        <div className={props.className}>
            <label>{props.label}</label>
            <select onChange={aoEscolher} required={props.required} value={props.valor} name={props.label} id={props.label}>
                <option value=''></option>
                {times.map(item => {
                    return <option key={item.nome}>{item.nome}</option>
                })}
            </select>
        </div>
    )
};

export default ListaSuspensa;
