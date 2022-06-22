import axios from "axios"
import React from "react"
import {url, headers } from "../constante/urls"




class CriarJobPage extends React.Component {
    state = {
        title: "",
        description: "",
        price: 0,
        dueDate: "",
        paymentMethods: []
    }
    handelInputValues = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handelPaymentMethods = (event) => {
        const method = [event.target.value];
        this.setState({ paymentMethods: method })
    }
    createJob = (event) => {
        event.preventDefault()
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            dueDate: this.state.dueDate,
            paymentMethods: this.state.paymentMethods
        }
        axios.post(`${url}/jobs`, body, headers)
            .then(() => {
                alert(`0 serviço "${this.state.title} foi criado com sucesso! `);
                this.setState({
                    title: "",
                    description: '',
                    price: 0,
                    dueDate: "",
                    paymentMethods: []
                })
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }


    render() {
        return (
            <div>
                <h2>Cadastre um Novo Job</h2>
                <form onSubmit={this.createJob}>
                    <label htmlFor={'title'} Título></label>
                    <input
                        id={'title'}
                        name={"title"}
                        value={this.state.price}
                        onChange={this.handleInputValues} />
                    <label htmlFor={"price"}>Preço</label>
                    <input
                        id={'price'}
                        name={"price"}
                        value={this.state.title}
                        onChange={this.handleInputValues} />

                    <section>
                        <h4> Formas de Pagamento</h4>
                        <select onChange={this.handelPaymentMethods}>
                            <option selected disabled>Selecione uma opção</option>
                            <option value={"boleto"}>Boleto</option>
                            <option value={"credito"}>Cartão de Crédito</option>
                            <option value={"debito"}>Cartão de Débito</option>
                            <option value={"paypal"}>PayPal</option>
                            <option value={"pix"}>Pix</option>

                        </select>

                    </section>
                    <label htmlFor={'date'}>Data: </label>
                    <input
                        id={'date'}
                        type={"date"}
                        name={"dueDate"}
                        value={this.state.dueDate}
                        onChange={this.handleInputValues}
                    />
                    <br />
                    <button type={"submit"}>Cadastrar Serviço</button>
                    
                </form>
            </div>
        )
    }

}
export default CriarJobPage