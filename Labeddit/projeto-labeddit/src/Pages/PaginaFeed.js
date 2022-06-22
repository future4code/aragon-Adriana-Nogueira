import Header from "../componentes/Header"
import useForm from "../hooks/useForm"
import { requestCreatePost } from "../serviços/requests"
import { useProtectedPage } from "../hooks/useProtectedPage"
import GlobalStateContext from "../context/GlobalStateContext"
import { useEffect } from "react"
import PostCard from "../componentes/PostCard"
import { useContext } from "react"
import styled from "styled-components"
import GlobalStyle from "../Theme/GlobalStyle"
const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 10%;
  height: 30px;
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
const Secao = styled.section`
font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;`

function FeedPage() {
    useProtectedPage();

    const { form, onChange, clear } = useForm({ title: "", body: "" });

    const { states, getters, setters } = useContext(GlobalStateContext);

    const { posts, page, isLoading } = states;

    const { getPosts } = getters;
    const { setPage } = setters


    useEffect(() => {
        getPosts(page);
    }, []);

    const createPost = (event) => {
        event.preventDefault();

        requestCreatePost(form, clear, getPosts);
    }
    const changePage = (sum) => {
        const nextPage = page + sum
        setPage(nextPage)
        getPosts(nextPage)
    }

    const showPosts = posts.length && posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                post={post}
                isFeed={true}
            />
        )
    })

    return (
            <GlobalStyle>
                <Header
                    isProtected={true}
                />
                <hr />
                <Secao>
                    <h2>Crie um novo Post</h2>
                    <form onSubmit={createPost}>
                        <label htmlFor={"title"}> Título: </label>
                        <Input
                            id={"title"}
                            name={"title"}
                            value={form.title}
                            onChange={onChange}
                            pattern={"^.{5,}$"}
                            title={"O nome deve ter no mínimo 5 caracteres"}
                            required
                        />
                        <br />
                        <label htmlFor={"body"}> Texto do post: </label>
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
                    <h2>Lista de Posts</h2>
                    <nav>
                        <h2>Selecione uma página</h2>
                        {page !== 1 &&
                            <Botao onClick={() => changePage(-1)}>Voltar</Botao>
                        }
                        <span>Pagina{page}</span>
                        {posts.length &&
                            <Botao onClick={() => changePage(1)}>Proxima página</Botao>
                        }
                    </nav>
                    <hr />

                    {isLoading ? <p>CARREGANDO...</p> : showPosts}
                </Secao>
            </GlobalStyle>
    );
};

export default FeedPage;