import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <>
                <h1>LabeNinjas</h1>
                <nav>
                    <button onClick={() => this.props.mudaPagina("home-page")}>Ir para HomePage</button>
                    <button onClick={() => this.props.mudaPagina("cart-page")}>Ir para Carrinho de Compras</button>
                </nav>
            </>
        );
    };
};

export default Header;