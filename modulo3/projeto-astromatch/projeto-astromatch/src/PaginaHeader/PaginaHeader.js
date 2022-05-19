import {useState} from "react";
import React from "react"
import PerfilUsuario from "./PerfilUsuario";
import Header from "../components/Header";
import PaginaMatches from "./PaginaMatches";



// Componente Funcional PaginaHeader vai  armazenar a lógica da renderização 
// condicional das paginas PerfilUsuario e os MatchesUsuarios onde ira ser a sua exibição

function PaginaHeader (){
const [page, setPage] = useState('profile')
// page onde armazena o valor da pagina e setPage atualiza  o estado

const renderPaginaAtual = () =>{
    switch(page) {
        case "profile":
            return<PerfilUsuario/>
            case "matches":
                return <PaginaMatches/>
                default:
                    return<PerfilUsuario/>

    }
}

const vaParaPerfil = () => {
    setPage("profile")
}
const vaParaMatches = ( ) => {
    setPage("matches")
}

    return(
        
        <div >
        <Header 
        page={page}
        vaParaPerfil={vaParaPerfil}
        vaParaMatches={vaParaMatches} />
       <main>
           {renderPaginaAtual()}
       </main>
         
    
      </div>
    );
  }
  
  export default PaginaHeader;
  

    