import React from "react";

import PaginaDeEntrada from "./components/PaginaDeEntrada";
import TelaNovoUsuario from "./components/TelaNovoUsuario";

 

export default class App extends React.Component{
  state = {
    paginaAtual: "cadastro"
  }

  escolhaPagina = () => {
    switch (this.state.paginaAtual){
      case "cadastro":
      return <PaginaDeEntrada irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaNovoUsuario irParaCadastro={this.irParaCadastro}/>
      default:
        return <div> Erro" Pagina não encontrada :(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({paginaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({paginaAtual: "lista"})
  }


  render(){
    return(
      <div>
    {this.escolhaPagina()}
   
      </div>

    )
  }
}






