import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    
`
const axiosAuth = {
    headers: {
        Authorization: "adriana-nogueira-aragon",
    
}
};


export default class TelaListaUsuarios extends React.Component {
    state = {
        novasMusicas: []
    }

    componentDidMount(){
        this.pegarUsuarios()

    }
        

    novasTracks = (data) => {
        this.setState({novasMusicas: data})
    }

   
    pegarUsuarios = () => {
        const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
          
          axios.get( url, axiosAuth
  
          )
        
            .then((res) => {
                this.setState({novasMusicas:res.data.result.list})
                console.log(res.data.result.list)
            })
            .catch((err) => {
               console.log(err.res.data)
               alert(`Erro ao carregar Playlist`)
    })
  }

    deletarUsuario = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${playlistId}`
        axios
        .delete(url, axiosAuth
            
        )
            .then((res) => {
                alert("lista deletado(a) com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
                console.log(err.res.data)
            })
    }
    
    render() {
        console.log(this.state.novasMusicas)
       const reinderizaLista = () => {
           return this.state.novasMusicas.map((item) => {
            return (
                <CardUsuario key={item.id}>
                    {item.name}
                    <button onClick={() => this.deletarUsuario(item.id)}>
                        delete
                    </button>
                </CardUsuario>
            )
        

  
           })
       }
        return (
            <div>
                <h1>Playlist</h1>
                    
                  {reinderizaLista()}
                  {reinderizaLista().length === 0
                  && <div>Carregando ...</div>}
                  
                  </div>
                  
                  
                
            
             
        )
    }
}