import Header from "../componentes/Header"
import useForm from "../hooks/useForm"
import { requestCreatePost } from "../serviços/requests"



function PaginaFeed() {
    //useProtectedPage()

     const {form, onChange, clear} =useForm({title:"", body:""})

    // const{state, getters} = useContext({GlobalStateContext})
    const createPost = (event) => {
        event.preventDefautl()

        requestCreatePost(form, clear)
    }
   
    return(
        <>
    <Header 
    isProtected={true}/>
    <h1> Crie um novo Post</h1>
    <section>
                <h1>Login</h1>
                <form onSubmit={createPost}>
                <label htmlFor={"title"}>Title:</label>
                <input id={"title"}
                name={"title"}
                value={form.title}
                onChange={onChange}
                pattern={"^,{5,}$"}
                title={"O nome deve ter no minimo 5 caracteres"}
               required
               />
                <br/>
                <label htmlFor={"body"}>Senha:</label>
                <input id={"body"}
                type={"text"}
                name={"body"}
                value={form.body}
                onChange={onChange}
                pattern={"^,{5,}$"}
                title={"O nome deve ter no minimo 5 caracteres"}
               required/>
                 <br/>
                <button type={"submit"} >Criarr</button>
                </form>
                </section>
                <hr/>
                <section>
                    <h3>Lista de Posts</h3>
                </section>
     </>
    )
}
export default PaginaFeed