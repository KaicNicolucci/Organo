import { useState } from 'react';
import Banner from './components/Banner/Banner.js'
import Formulario from './components/Formulario/Formulario.js';
import Times from './components/Times/index.js';

function App(){

  const times = [
    {
      nome: "Programação",
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: "Front End",
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: "Data Science",
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: "Devops",
      corPrimaria: '#FDE7E8',
      corSecundaria: '#ED6869'
    },
    {
      nome: "UX e Design",
      corPrimaria: '#FAE9F5',
      corSecundaria: '#D86E8F'
    },
    {
      nome: "Mobile",
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    }
  ]

    const [colaboradores, setColabores] = useState([])

    const aoColaboradorAdicionado = (colaborador) => {

        setColabores([...colaboradores, colaborador])
        

    }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times} aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}/>
      {times.map(time =>
        <Times 
        key={time.nome}
        nome={time.nome} 
        listaColaboradores={colaboradores.filter(colaborador => colaborador.option === time.nome)}
        corFundo={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        />
      )}
      
    </div>
  )
}

export default App
