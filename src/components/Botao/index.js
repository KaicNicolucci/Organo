const Botao = (props) => {
    return (
        <button type={props.type}>
            {props.children}
        </button>
    )
}

export default Botao
