import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../Rotas/coordenadas';

function ErrorPage () {
    const navigate = useNavigate()
  
        return (
            <div>
                <h1>Pagina não encontrada</h1>
                <button onClick={() => goToHomePage(navigate)}>Voltar para HomePage </button>
            </div>
        );
    }


export default ErrorPage;