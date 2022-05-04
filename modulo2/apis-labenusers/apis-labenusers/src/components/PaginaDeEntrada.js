import axios from "axios";
import React from "react";
import styled from "styled-components";
const PaginaNova = styled.div`
text-align: center;
font-family: Arial, Helvetica, sans-serif;
padding: 0px;
margin: 0 auto;
width: 30%;
display: flex;
justify-content: space-between;
border: 10px
`

const RegistroButton = styled.button`
  margin: 0 auto;
  background-color: hsl(236, 32%, 26%);
  color: white;
  border: none;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;

  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;



export default class PaginaDeEntrada extends React.Component {
    state = {
        nome: "",
        email: ""
    }
    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "adriana-nogueira-aragon"
            }
        })
            .then((res) => {
                alert("Usuario cadastrado")
                this.setState({nome:"", email:""})
            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }



    render() {
        return (
            <PaginaNova>
            <div>
                <RegistroButton onClick={this.props.irParaLista}>Ir para Lista  </RegistroButton>
                <h2>Cadastro</h2>
               
                <input placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                
                <RegistroButton onClick={this.fazerCadastro}> Cadastrar</RegistroButton>
            </div>
            </PaginaNova>
        );
    }
}
