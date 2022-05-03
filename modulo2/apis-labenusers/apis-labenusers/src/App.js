import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    playlists: [],
    inputName: "",
    inputEmail:""
  };

  onChangeInput = (event) => {
    this.setState({ inputName: event.target.value });
    
  };
onChangeInputNovo = (event) => {
  this.setState({inputEmail:event.target.value})
}
  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = () => {
    axios
      .get(
       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "adriana-nogueira-aragon"
          }
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.name });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputName
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
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

  render() {
    return (
      <main>
        

        <section>
          <label>
            Lista
            <input value={this.state.inputName} onChange={this.onChangeInput} />
            <input value={this.state.inputEmail} onChange={this.onChangeInput} />
          </label>

          <button onClick={this.createPlaylist}>Adicionar</button>
        </section>

        <section>
          {this.state.playlists.map((playlist) => {
            return <p key={playlist.id}>{playlist.name}</p>;
          })}
        </section>
      </main>
    );
  }
}
