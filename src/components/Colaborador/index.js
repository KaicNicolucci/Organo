import './Colaborador.css'

const Colaborador = (props) => {
    

    return (
        <div key={props.nome} className='colaborador'>
            <div style={{backgroundColor: props.corSecundaria}} className='imagem'>
                <img src={props.imagem} alt={props.nome}/>  
            </div>
            <div className='infos'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )

}

export default Colaborador