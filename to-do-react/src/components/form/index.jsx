import React from "react";
import { useState } from "react";
import Input from "../input";

function Form() {
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [data, setData] = useState("");
  const nomeTarefa = (valor) => {
    setNome(valor);
  };
  const corTarefa = (valor) => {
    setCor(valor);
  };
  const dataTarefa = (valor) => {
    setData(valor);
  };

  function novaTarefa(e){
    e.preventDefault()
  }

  return (
    <div className="form">
      <form onSubmit={(e) => novaTarefa(e)}>
        <Input placeholder="valor" onChange={(valor) => nomeTarefa(valor)} />
        <Input
          placeholder="Escolha a cor:"
          onChange={(valor) => corTarefa(valor)}
          tipo="color"
        />
        <Input
          placeholder="Qual o praso:"
          onChange={(valor) => dataTarefa(valor)}
          tipo="date"
        />
        <button>
          +
        </button>
      </form>
    </div>
  );
}

export default Form;
