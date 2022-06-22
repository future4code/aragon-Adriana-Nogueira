import React from "react";

// Esse exemplo só demonstra como não necessariamente o map precisa
// estar em uma variável. Ele pode simplesmente estar no meio do JSX.

class Exemplo4 extends React.Component {
  state = {
    pessoas: ["Paula", "João"]
  };

  render() {
    return (
      <div>
        <h1>Exemplo 4</h1>
        <div>
          {/* Mapeando o array de pessoas, que está no estado, para
          o componente */}
          {this.state.pessoas.map((pessoa) => {
            return <p>{pessoa}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Exemplo4;
