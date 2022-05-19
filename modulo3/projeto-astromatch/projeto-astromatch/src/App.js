import React from "react";
import styled from "styled-components";
import PaginaHeader from "./PaginaHeader/PaginaHeader";

const PrimeiraPagina = styled.div`
font-family: Arial, Helvetica, sans-serif;
`
const Cabecalho = styled.div`
border-bottom: 1px solid black`

function App() {
  return (




    <PrimeiraPagina >

    {/* componente funcional App  irá promover a Renderização de elementos e logicas  */}
      <Cabecalho >
     
        <PaginaHeader/>
              
      </Cabecalho>
    </PrimeiraPagina>
  );
}

export default App;
