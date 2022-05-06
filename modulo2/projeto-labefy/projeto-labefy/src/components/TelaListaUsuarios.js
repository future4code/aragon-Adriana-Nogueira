import React from "react"
import axios from "axios"
import { BASE_URL } from "./url";


export default class TelaListaUsuarios extends React.Component {
    state = {
        playlists: [],
    };



    componentDidMount() {
        this.getPlaylists();
    }

    getPlaylists = () => {
        axios.get(`${BASE_URL}/playlists`,)

            .then((response) => {
              this.setState({ playlists: response.data.result.list })
            
            .catch((error) => console.log(error.message))

            })
}


    render() {
     
        const listaUsuarios = this.state.playlists.map((playlist) => {
            return 
                <p key={playlist.id}>
                    {playlist.name}
                   
                </p>
            
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}