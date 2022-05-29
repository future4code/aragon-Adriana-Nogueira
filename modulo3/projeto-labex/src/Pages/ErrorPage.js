import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../Rotas/coordenadas';

import styled from "styled-components"

const Botao = styled.button`
cursor: pointer;
background: black;
color:white;
box-shadow: #094c66 4px 4px 0px;
border-radius: 8px;
transition: transform 200mx, box-shadow;
margin:0.5rem;

button:active{
    transform: translateY(4px) translateX(4px);
    box-shadow: #094c66 0px 0px 0px;
}
`

function ErrorPage () {
    const navigate = useNavigate()
  
        return (
            <div>
                <h1>Pagina não encontrada</h1>
                <Botao onClick={() => goToHomePage(navigate)}>Voltar para HomePage </Botao>
            </div>
        );
    }


export default ErrorPage;