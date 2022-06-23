import React from 'react'
import styled from 'styled-components'
import { PerguntaUsuario } from './PerguntaUsuario'

const Etapa3Container = styled.div``

const Etapa3Botao = styled.button `
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
`

export class Etapa3 extends React.Component {
  constructor(props) {
    super(props)
    this.terminarEnsinoSuperior = ""
    this.cursoComplementar = ""
  }

  atualizarTerminarEnsinoSuperior = (terminarEnsinoSuperior) => { this.terminarEnsinoSuperior = terminarEnsinoSuperior }
  atualizarCursoComplementar = (cursoComplementar) => { this.cursoComplementar = cursoComplementar }

  aoClicarNoProximo = () => {
    if(this.props.aoClicarEmEnviar) {
      this.props.aoClicarEmEnviar({
        terminarEnsinoSuperior: this.terminarEnsinoSuperior,
        cursoComplementar: this.cursoComplementar
      })
    }
  }

  render = () => {
    return (
      <Etapa3Container>
        <h3> <b> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </b> </h3>
        <PerguntaUsuario
          onChange={ this.atualizarTerminarEnsinoSuperior }
          titulo={ "5. Por que você não terminou um curso de graduação?" }
        />
        <br/>
        <PerguntaUsuario
          onChange={ this.atualizarCursoComplementar }
          titulo={"6. Você fez algum curso complementar?"}
          tipo={"selecao"}
          opcoes={
            ["Curso técnico",
              "Cursos de inglês",
              "Não fiz nem curso complementar"]
          }
        />
        <br/>
        <Etapa3Botao onClick = { this.aoClicarNoProximo }> Finalizar </Etapa3Botao>
      </Etapa3Container>
    )
  }
}