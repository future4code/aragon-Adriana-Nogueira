import { useParams } from "react-router-dom";
import Header from "../componentes/Header";




export default function PaginaDetalhes() {
   const params = useParams()
    return(
        <header>
            <Header/>
            <h1>Detalhes {params.id}</h1>
        </header>

    )
}