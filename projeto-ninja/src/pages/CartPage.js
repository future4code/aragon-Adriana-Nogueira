import React from "react";

class CartPage  extends React.Component{



    render(){
        return(
            <div>
                <section>
                    <h2> Dados da Compra</h2>
                    <p>Preço total:</p>
                    <button onClick={() =>  this.props.mudaPagina("list-page")}>Voltar para Lista de Jobs</button>
                    <button>Finalizar Compra</button>
                </section>
            </div>
        
        )
    }
}
export default CartPage