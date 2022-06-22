import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../componentes/Header";
import PostCard from "../componentes/PostCard";
import PostComment from "../componentes/PostComment";
import GlobalStateContext from "../context/GlobalStateContext";
import useProtectedPage from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { requestCreateComment } from "../serviços/requests";
import { goToFeed } from "../routes/coordenadas";
import styled from "styled-components"
import GlobalStyle from "../Theme/GlobalStyle";

const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 10%;
  height: 30px;
  `
  const Secao = styled.section`
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
   
  `
  
  const Input = styled.input`
  font-family: Poppins-Regular;
      font-size: 15px;
      color: #555555;
      line-height: 1.2;
      display: block;
      width: 99%;
      height: 45px;
      background: transparent;
      padding: 0 5px;
      
  
  `

function PaginaDetalhes() {
    useProtectedPage()
    const navigate = useNavigate()
    const params = useParams()
    const { form, onChange, clear } = useForm({ body: "" })
    const { states, getters } = useContext(GlobalStateContext)
    const { post, postComments, isLoading } = states
    const { getPostComments } = getters

    useEffect(() => {
        if (post.id && post.id === params.postId) {
            getPostComments(post.id);
        } else {
            alert("Um erro ocorreu! Você será redirecionado para Feed.")
            goToFeed(navigate);
        }
    }, []);

    const createdComment = (event) => {
        event.preventDefault();
        requestCreateComment(form, clear, getPostComments, post.id);
    };
    const showComments = postComments.length ? postComments.map((comment) => {
        
        return (
            <PostComment
                key={comment.id}
                comment={comment} />
        )
    }) : <p>Não há comentarios para este post. Seja a primeira pessoa a comentar!</p>
    return (
        <GlobalStyle>
            <Header
                isProtected={true} />
            <hr />
            <Botao onClick={() => (navigate(-1))}>Voltar</Botao>
            <Secao>
                <h2>Informações do Post</h2>
                <PostCard
                    key={post.id}
                    post={post}
                    isfeed={false} />
            </Secao>
            <Secao>
                <h1>Escreva seu comentario</h1>
                <form onSubmit={createdComment}>
                    <label htmlFor={"body"}> Comentário: </label>
                    <Input
                        id={"body"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <Botao type={"submit"}>Criar Post</Botao>
                </form>
            </Secao>
            <hr />
            <Secao>
                <h2>Lista de comentarios</h2>
                {isLoading ? <p>CARREGANDO...</p>:showComments}
            </Secao>
        </GlobalStyle>

    )
}
export default PaginaDetalhes