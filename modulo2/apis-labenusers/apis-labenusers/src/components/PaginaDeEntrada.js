import React from "react";
import axios from "axios";

class PaginaDeEntrada extends React.Component {
    state = {
        name: [],
        name: "",
        email: ""
    };

    onChangeInputName = event => {
        this.setState({ name: event.target.value });
    }


    onChangeInputEmail = event => {
        this.setState({ email: event.target.value });
    };
    componentDidMount() {
        this.getNames = () => {
            axios
                .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                    {
                        headers: {
                            Authorization: "adriana-nogueira-aragon"
                        }
                    }
                )
                .then((response) => {
                    this.setState({name: response.data.result.list})
                })
                .catch((erro) => {
                   
                    console.log(erro.message)
                })
    
        }
    }

    handleCreateUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
            }
       
        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    heades:{
                        Authorization:"adriana-nogueira-aragon"
                    }
                }
                
            )
            .then((response) => {
                alert(`Usuário ${this.state.name} criado com sucesso!`);
                this.handleCreateUser();
            })
            .catch(error => {
                alert("Erro ao criar o usuário");
                console.log(error);
            });
    };

    render() {
        return (
            <main>
                <section>

                    <label>
                        nome
                        <input value={this.state.name} onChange={this.onChangeInputName}/>
                        <input value={this.state.email} onChange={this.onChangeInputEmail}/>
                    </label>
                    <button onClick={this.handleCreateUser}>Criar Usuário</button>

                </section>
                <section>
                    {this.state.name.map((name) => {
                        return <p key={name.id}>{name.name}</p>
                    })}
                </section>


            </main>
          
        );
    }
}

export default PaginaDeEntrada;
