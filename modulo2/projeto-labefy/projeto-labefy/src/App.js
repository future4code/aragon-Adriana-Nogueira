import React from "react";
import DetalhesDaPagina from "./DetalhesDaPagina/DetalhesDaPagina";
import ListaDaPagina from "./ListaDaPagina/ListaDaPagina";


export default class App extends React.Component{
  state = {
    currentScreen:"details"
  }
  selectPage =() =>{
    switch(this.state.currentScreen){
      case 'list':
        return <ListaDaPagina/>
        case "details":
          return <DetalhesDaPagina/>
          default:
            return <ListaDaPagina/>
      }
    }
  

    render (){
      return( 
        <div> 
          {this.selectPage()}
        </div>
        
      )
    }
  }





