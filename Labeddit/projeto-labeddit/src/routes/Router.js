import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage"
import PaginaLogin from "../Pages/PaginaLogin"
import PaginaLogout from "../Pages/PaginaLogout"
import PaginaDetalhe from "../Pages/PaginaDetalhe"
import PaginaFeed from "../Pages/PaginaFeed"



 function Router(){
return(
    <BrowserRouter>
    <Routes>
        <Route index element={<PaginaFeed/>}/>
        <Route path="/login" element={<PaginaLogin/>}/>
        <Route path="/signup" element={<PaginaLogout/>}/>
        <Route path="/post/:postId" element={<PaginaDetalhe/>}/>
        <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
    
)

}export default Router;