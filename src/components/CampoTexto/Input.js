const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        
        props.aoAdicionar(evento.target.value)
    }   

    return (
        <div className='style-input'>
        <label htmlFor={props.label}>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.required} id={props.label} type={props.type} placeholder={props.placeholder} name={props.label}/>
        </div>
    );
}

export default CampoTexto

