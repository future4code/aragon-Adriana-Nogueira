import React from "react";
import axios from "axios";
import styled from "styled-components";

const BotaoDelete = styled.button`
margin: 0 auto;
  background-color: hsl(236, 32%, 26%);
  color: white;
  border: none;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  display: flex;
`
const CardUsuario = styled.div`
 display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  div {
    margin-bottom: 20px;
  }
`;
const RegisterButton = styled.button`
  margin: 0 auto;
  background-color: hsl(236, 32%, 26%);
  color: white;
  border: none;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  display: flex;


  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;
const TituloCentralizado = styled.div`
text-align: center;
font-family:Arial, Helvetica, sans-serif
`


export default class TelaNovoUsuario extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        /* axios.get(url, {
            headers: {
                Authorization: "adriana-nogueira-aragon"
            }
        })
            .then((resp) => {
                this.setState({ usuarios: resp.data })
            })
            .catch((err) => {
                alert("Ocorreu um problema tente novamente")

            }) */

            try {
                const res =  await axios.get(url, {
                    headers:{
                        Authorization: "adriana-nogueira-aragon"
                    } 
                })
                this.setState({usuarios: res.data})

            }
            catch (err){
                alert("Ocorreu um problema tente novamente")

            }
        } 
    
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "adriana-nogueira-aragon"
            }
        })
            .then((res) => {
                alert("Usuario deletado com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro tente novamente")
            })
        }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <BotaoDelete onClick={() => this.deletarUsuario(user.id)}>x</BotaoDelete>
                </CardUsuario>
            )
        })
        return (
            
            <div>
                <RegisterButton onClick={this.props.irParaCadastro}>Ira para Cadastro  </RegisterButton>
                <TituloCentralizado>
                <h2> TelaNovoUsuario</h2>
                </TituloCentralizado>
                {listaUsuarios}
            </div>
          
        )
    }

}