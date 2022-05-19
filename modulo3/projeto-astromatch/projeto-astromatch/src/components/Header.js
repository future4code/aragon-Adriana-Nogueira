import styled from "styled-components";


const Botao = styled.button`
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
border-radius: 10px;
border:0;
border: none;
outline:none;
padding: 1.25em 2 em;
transform-style: preserve-3d;
transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
cursor:pointer;



&:hover {
    background: purple;
    box-shadow: 0 5px 01 #670167;
    color: #fff
}
 
`
function Header(props) {



    return (
        <header>
            <h1>ASTROMACH</h1>

            {props.page === "profile" ?
                <Botao onClick={props.vaParaMatches}>Matches</Botao> :
                <Botao onClick={props.vaParaPerfil}>Ver Perfil</Botao>
            }
        </header>
    );
}


export default Header;
