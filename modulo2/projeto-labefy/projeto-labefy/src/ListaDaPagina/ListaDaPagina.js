
import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants/url";

export default class ListaDaPagina extends React.Component {
    state = {
        listaDaPagina: []
    }
    componentDidMount(){
        this.getCharacterList()

    }
    getListaDaPagina = () => {
        axios.get(`${BASE_URL}/people/1/`)
        .then((res) => console.log(res.data.results))
        .catch((err) => console.log(err.response))
    }
    render() {
        return (
            <div>
                Exemplo
            </div>
        )
    }
}
