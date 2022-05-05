import React from "react";
import axios from "axios";
import styled from "styled-components";

const UserList = styled.ul`
align-items: center`;

const BotaoDelete = styled.button`
  border: none;
  cursor: pointer;
  background: #aaaaaa;
  color: #ffffff;
  display: inline-block;
  margin: 0 -2px;
  padding: 5px 10px;
  border: 1px solid #666666;
`;

const CardUsuario = styled.div`
 display: flex;
  min-width: 60px;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
  font-size: 20px;
  font-style:italic
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
            
            <UserList>
                <RegisterButton onClick={this.props.irParaCadastro}>Ira para Cadastro  </RegisterButton>
                <TituloCentralizado>
                <h2> TelaNovoUsuario</h2>
                </TituloCentralizado>
                {listaUsuarios}
            </UserList>
          
        )
    }

}