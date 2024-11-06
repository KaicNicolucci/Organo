import { useState } from "react";
import Botao from "../Botao/index.js";
import CampoTexto from "../CampoTexto/Input.js";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.js";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [option, setOption] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      option,
    });
    setNome('')
    setCargo('')
    setImagem('')
    setOption('')
  };

  return (
    <div className="form-div">
      <h1>Preencha os dados para criar o card do Colaborador.</h1>
      <form className="form-style" onSubmit={aoSalvar}>
        <CampoTexto
          valor={nome}
          aoAdicionar={(valor) => setNome(valor)}
          required={true}
          id="nome"
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAdicionar={(valor) => setCargo(valor)}
          required={true}
          id="cargo"
          label="Cargo"
          type="text"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAdicionar={(valor) => setImagem(valor)}
          required={false}
          label="Imagem"
          id="imagem"
          type="url"
          placeholder="Digite o endereço da sua imagem"
        />
        <ListaSuspensa
          valor={option}
          aoAdicionar={(valor) => setOption(valor)}
          required={true}
          id="time"
          className="style-input"
          label="Times"
          itens={props.times}
        />
        <Botao type={"submit"}>Criar Card</Botao>
      </form>
    </div>
  );
};

export default Formulario;
