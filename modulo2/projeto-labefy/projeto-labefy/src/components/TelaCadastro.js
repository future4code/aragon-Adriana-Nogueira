import React from "react"
import axios from "axios"

const axiosAuth = {
  headers: {
      Authorization: "adriana-nogueira-aragon",
  }
};



export default class TelaListaUsuarios extends React.Component {
    state = {
        playlists: [],
        nome: "",
        musico: "",
        linkDaMusica: "",
        novaLista:{}
    }

    

  
    handleName = (event) => {
      this.setState({nome: event.target.value})
    }
    handleMusico= (event) => {
      this.setState({musico: event.target.value})
    }
    handleLink = (event) => {
      this.setState({linkDaMusica: event.target.value})
    }


addNovaTrackPlaylist = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
  const body = {
    name: this.state.nome,
    musico: this.state.musico,
    link: this.state.linkDaMusica
  }


  axios.post(url, body,
              axiosAuth
  )
  
          .then((res) => {
              alert("Musica cadastrada com sucesso!")
              this.setState({nome: "", musico:"", linkDaMusica:""})
          })
          .catch((err) => {
              alert(err.response.data.message)
          })
  }
  
   
  
  
    render(){

      const listaPlaylists = this.state.playlists.map((playlist) =>{
        return <p key={playlist.id}>{playlist.name}</p>
      })
      return(
        <div>
          {listaPlaylists}
          <button onClick={this.props.vaParaLista}>Ir para Playlist</button>
          <h2> Nova Playlist</h2>
          <h2>Melhores musicas</h2>
          <h4>Monte sua playlist</h4>
          <h4>
            Nome
          </h4>
          <input
                        placeholder={"nome da musica"}
                        value={this.state.nome}
                        onChange={this.handleName}
                    />
                    <h2>musico</h2>
                    <input placeholder="autor da musica"
                        value={this.state.musico}
                        onChange={this.handleMusico}
                    />
                    <h2>Link da musica</h2>
                    <input placeholder="url da musica"
                        value={this.state.linkDaMusica}
                        onChange={this.handleLink}
                    />


                    <button onClick={this.addNovaTrackPlaylist}>Inserir Musica</button>

               
            </div>
        )
    }
} 
   
        