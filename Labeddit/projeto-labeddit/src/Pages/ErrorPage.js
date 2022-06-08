import { useNavigate } from "react-router-dom"
import {goToFeed} from "../routes/coordenadas"


 function ErrorPage() {
    const navigate = useNavigate()
    return(
        <main>
          <h1>  Error ao entrar na pagina</h1>
          <button onClick={() => goToFeed(navigate)}>Ir para feed</button>
        </main>

    )
}export default ErrorPage