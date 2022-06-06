import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage"
import PaginaLogin from "../Pages/PaginaLogin"
import PaginaCadastro from "../Pages/PaginaCadastro"
import PaginaDetalhe from "../Pages/PaginaDetalhe"
import PaginaFeed from "../Pages/PaginaFeed"



 function Router(){
return(
    <BrowserRouter>
    <Routes>
        <Route index element={<PaginaFeed/>}/>
        <Route path="/login" element={<PaginaLogin/>}/>
        <Route path="/Cadastro" element={<PaginaCadastro/>}/>
        <Route path="/detalhes" element={<PaginaDetalhe/>}/>
        <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
    
)

}export default Router;