import React from "react"
import axios from "axios"


export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        

        
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

   

    createPlaylist = () => {
        const body = {
          nome: this.state.nome
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
              headers: {
                Authorization: "adriana-nogueira-aragon"
              }
            }
          )
          .then((response) => {
            this.getPlaylists();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para playlist</button>
                <h2>Labefy Adriana Aragon</h2>
                <h2>Todos os hits você encontra a</h2>

                <input
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
              
        
            </div>
        )
    }
}