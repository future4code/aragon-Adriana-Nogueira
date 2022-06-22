import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuarios from "./components/TelaListaUsuarios"

 class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    musicasEscolhidas:""
  }

  vaParaTela = (url) => {
    this.setState({telaAtual:"detalhes",musicasEscolhidas:url})
  }

  voltarParaCadastro = () => 
{
  this.setState({telaAtual: "primeiraTela"})
}
vaParaLista = () => {
  this.setState({telaAtual: "lista"})
}

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro vaParaLista={this.vaParaLista}/>
      case "lista":
        return <TelaListaUsuarios voltarParaCadastro={this.voltarParaCadastro}/>
      default:
        return <TelaCadastro url = {this.state.musicasEscolhidas}/>
    }
  }

  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
export default App 