import React from 'react'
import styled from 'styled-components'
import { PerguntaUsuario } from './PerguntaUsuario'

const Etapa2Container = styled.div``

const Etapa2Botao = styled.button `
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
`

export class Etapa2 extends React.Component {
  constructor(props) {
    super(props)
    this.curso = ""
    this.unidadeDeEnsino = ""
  }

  atualizarCurso = (curso) => { this.curso = curso }
  atualizarUnidadeDeEnsino = (unidadeDeEnsino) => { this.unidadeDeEnsino = unidadeDeEnsino }

  aoClicarNoProximo = () => {
    if(this.props.aoClicarEmEnviar) {
      this.props.aoClicarEmEnviar({
        curso: this.curso,
        unidadeDeEnsino: this.unidadeDeEnsino
      })
    }
  }

  render = () => {
    return (
      <Etapa2Container>
        <h3> <b> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </b> </h3>
        <PerguntaUsuario
          onChange={ this.atualizarCurso }
          titulo={"5. Qual curso?"}
        />
        <br/>
        <PerguntaUsuario
          onChange={ this.atualizarUnidadeDeEnsino }
          titulo={"6. Qual a unidade de ensino?"}
        />
        <br/>
        <Etapa2Botao onClick = { this.aoClicarNoProximo }> Finalizar </Etapa2Botao>
      </Etapa2Container>
    )
  }
}