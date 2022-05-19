
function Header(props){


   
        return (
            <header>
                <h1>ASTROMACH</h1>

                {props.page === "profile" ? 
                <button onClick={props.vaParaMatches}>Matches</button>:
                <button onClick={props.vaParaPerfil}>Ver Perfil</button>
        }
            </header>
        );
    }


export default Header;
