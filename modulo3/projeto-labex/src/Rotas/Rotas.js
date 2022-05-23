import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminPage from '../Pages/AdminPage';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import styled from "styled-components"

const Container =  styled.div`
font-family: Arial, Helvetica, sans-serif;
`

function Rotas () {

        return (
            <Container>
                <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/admin"} element={<AdminPage/>}/>
                    <Route path={"*"} element={<ErrorPage/>}/>
                </Routes>
                </BrowserRouter>
            </Container>
        );
    }


export default Rotas;