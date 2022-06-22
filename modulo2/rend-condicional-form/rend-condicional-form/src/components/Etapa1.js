import React from 'react'
import { PerguntaUsuario} from './PerguntaUsuario'
import styled from 'styled-components'

const Etapa1Container = styled.div``

const Etapa1Botao = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
`

export class Etapa1 extends React.Component {
  constructor(props) {
    super(props)
    this.nome = ""
    this.idade = ""
    this.email = ""
    this.escolaridade = ""
  }

  atualizaNome = (nome) => { this.nome = nome }
  atualizaIdade = (idade) => { this.idade = idade }
  atualizaEmail = (email) => { this.email = email }
  atualizaEscolaridade = (escolaridade) => {
    console.log(escolaridade)
    this.escolaridade = escolaridade
  }

  aoClicarNoProximo = () => {
    if (this.props.aoClicarEmEnviar) {
      this.props.aoClicarEmEnviar({
        nome: this.nome,
        idade: this.idade,
        email: this.email,
        escolaridade: this.escolaridade || "Ensino Médio Incompleto"
      })
    }
  }

  render = () => {
    return (
      <Etapa1Container>
        <h3> <b> ETAPA 1 - DADOS GERAIS </b> </h3>
        <PerguntaUsuario
          onChange={this.atualizaNome}
          titulo={"1. Qual seu nome?"}
        />
        <br />
        <PerguntaUsuario
          onChange={this.atualizaIdade}
          titulo={"2. Qual sua idade?"}
        />
        <br />
        <PerguntaUsuario
          onChange={this.atualizaEmail}
          titulo={"3. Qual seu email?"}
        />
        <br />
        <PerguntaUsuario
          onChange={this.atualizaEscolaridade}
          titulo={"4. Qual sua escolaridade?"}
          tipo={"selecao"}
          opcoes={
            ["Ensino Médio Incompleto",
              "Ensino Médio Completo",
              "Ensino Superior Incompleto",
              "Ensino Superior Completo"]
          }
        />
        <br />
        <Etapa1Botao onClick={this.aoClicarNoProximo}> Continuar </Etapa1Botao>
      </Etapa1Container>

    )
  }
}
