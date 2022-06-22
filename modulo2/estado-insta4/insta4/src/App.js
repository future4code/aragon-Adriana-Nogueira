import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/40/30'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'drica'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/140'}
        />
         <Post
          nomeUsuario={'deinha'}
          fotoUsuario={'https://picsum.photos/30/50'}
          fotoPost={'https://picsum.photos/100/150'}
        />
      </MainContainer>
    );
  }
}

  state = {
    nomeEntrada: "",
    nomeEntrada2: "",
    nomeEntrada3: "",


    listaInstagram: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/40/30",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: 'deinha',
        fotoUsuario: 'https://picsum.photos/30/50',
        fotoPost: 'https://picsum.photos/100/150'
      },
      {
        nomeUsuario: 'drica',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/140'
      }

    ]
  };

  adicionaFeed = () => {

const novaListaInstagram = {
  nome: this.state.nomeEntrada,
  fotoPostInput: this.state.nomeEntrada2,
  fotoPost: this.state.nomeEntrada3
};

  
  const novasListaInstagram = [...this.state.listaInstagram,novaListaInstagram];

  this.setState({listaInstagram: novasListaInstagram})
};

    onChangeNome = (event) => {
      this.setState({ nomeInput: event.target.value })
  }
  onChangeFotoUsuario = (event) => {
    this.setState({ fotoUsuarioInput: event.target.value })
}
onChangeFotoPost = (event) => {
  this.setState({ fotoPostInput: event.target.value })
}

onSubmitForm = (event) => {
    event.preventDefault()

    const novaListaInstagram = [...this.state.listaInstagram]
    novaListaInstagram.push({
        nome: this.state.nomeInput,
        fotoUsuario: this.state.fotoUsuario,
        fotoPost: this.state.fotoPostInput
    })

    this.setState({ listaInstagram: novaListaInstagram })
}




  render() {
    return (
      <main>
        <form onSubmit={this.onSubmitForm}>
            <label for="">
              <input
              name="Nome"
              placeholder="Nome"
              value={this.state.nomeInput}
              onChange={this.onChangeNome}/>
               </label>

               <label for="">
              <input
              name="Nome"
              placeholder="Usuario"
              value={this.state.fotoUsuarioInput}
              onChange={this.onChangeFotoUsuario}/>
               </label>

               <label for="">
              <input
              name="Nome"
              placeholder="Post"
              value={this.state.fotoPostInput}
              onChange={this.onChangeFotoPost}/>
               </label>

               <button>Adicionar</button>
               </form>
               
               {this.state.listaInstagram.map((pessoa) => {
               
               return (
          
                <Post
                nomeUsuario={'drica'}
                fotoUsuario={'https://picsum.photos/30/50?'}
                fotoPost={'https://picsum.photos/120/150?'}
                />

                ) })}
               </main>
               )
              }
            }


export default App;
