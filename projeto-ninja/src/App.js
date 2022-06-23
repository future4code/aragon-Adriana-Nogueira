import React from "react";
import Header from "./componentes/Header";
import HomePage from "./pages/HomePage";
import CriarJobPage from "./pages/CriarJobPage";
import CartPage from "./pages/CartPage";
import JobsPage from "./pages/JobsPage"


class App extends React.Component {
  state = {
    paginaAtual: "home-page"
  };

  // Função que armazena o novo valor de estado para página atual
  mudaPagina = (page) => {
    this.setState({ paginaAtual: page });
  };

  // Função que renderiza condicionalmente uma página (no momento, não temos a
  // JobDetailsPage)
  escolhePagina = () => {
    switch (this.state.paginaAtual) {
      case "home-page":
        return <HomePage 
          mudaPagina={this.mudaPagina}
        />
      case "list-page":
        return <JobsPage />
      case "form-page":
        return <CriarJobPage />
      case "cart-page":
        return <CartPage 
          mudaPagina={this.mudaPagina}
        />
      default:
        return <HomePage />
    };
  };

  render() {
    return (
      <>
        {/* Header -> Componente comum a todas as páginas, então foi implementada 
        diretamente ao App.js (pai comum) */}
        <header>
          <Header 
            mudaPagina={this.mudaPagina}
          />
        </header>
        <hr />
        <main>
          {this.escolhePagina()}
        </main>
      </>
    );
  };
};


export default App;
