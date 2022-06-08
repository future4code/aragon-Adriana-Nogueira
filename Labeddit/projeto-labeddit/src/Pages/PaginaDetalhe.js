import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../componentes/Header";
import PostCard from "../componentes/PostCard";
import PostComment from "../componentes/PostComment";
import GlobalStateContext from "../context/GlobalStateContext";
import useProtectedPage from "../hooks/useProtectedPage";
import { goToFeed } from "../routes/coordenadas";
import useForm from "../hooks/useForm";
import { requestCreateComment } from "../serviços/requests";
import {goback} from "../routes/coordenadas"


 function PaginaDetalhes() {
useProtectedPage()
const navigate = useNavigate()
   const params = useParams()

   const {form, onChange, clear} = useForm ({body:""})

   const {states, getters} = useContext(GlobalStateContext)

   const {post, postComments} = states
   const{getPostComments} = getters
    useEffect(() => {
       if (post.id && post.id === params.postId){

        } else {
        console.log("olá")
        alert("Um erro ocorreu! Você será redirecionado para Feed.")
        goToFeed(navigate);
    }
}, []);

const createdComment = (e) => {
    e.preventDefault()

    requestCreateComment(form, clear, getPostComments, post.id);
};
const showComments = postComments.length ? postComments.map((comment) => {
    return(
        <PostComment
        key={comment.id}
        comment={comment}/>
    )
}):<p>Não há comentarios para este post. Seja a primeira pessoa a comentar!</p>
    return(
        <main>
            <Header 
            isProtected={true}/>
            <hr/>
            <button onClick={() => goback(navigate(-1))}>Voltar</button>
            <section>
                <h2>Informações do Post</h2>
                <PostCard
                key={post.id}
                post={post}
                isfeed={false}/>
            </section>
            <section>
            <h1>Escreva seu comentario</h1>
            <form onSubmit={createdComment}>
                <label htmlFor={"body"}>Comentario:</label>
                <input
                id={"body"}
                type={"text"}
                name={"body"}
                value={form.body}
                onChange={onChange}
                pattern={"^.{5,}$"}
                title={"O nome deve ter no mínimo 5 caracteres"}
                required
            />
            <br/>
            <button>Criar Post</button>
            </form>
            </section>
            <hr/>
            <section>
                <h2>Lista de comentarios</h2>
                {showComments}
            </section>
        </main>

    )
}
export default PaginaDetalhes