import React from "react";

class HomePage extends React.Component {



    render() {
        return (
            <div>
                <h2> Bem-vindo a LabeNinjas!</h2>

                <button onClick={() => this.props.mudaPagina("form-page")}>Cadastrar um Job</button>
                <button onClick={() => this.props.mudaPagina("list-page")}>Contratar um Job</button>
            </div>

        )
    }
}
export default HomePage
