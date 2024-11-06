import Colaborador from '../Colaborador'
import './Times.css'


const Times = (props) => {

  return (
    (props.listaColaboradores.length > 0) && <section key={props.nome} className='time' style={{backgroundColor: props.corFundo }} >
      <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
        <div className='cards'>
          {props.listaColaboradores.map(colaborador => {
            return <Colaborador 
              key={colaborador.nome}
              imagem={colaborador.imagem}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              corSecundaria={props.corSecundaria}
            />
          })}
        </div>
    </section>
  )
}

export default Times
