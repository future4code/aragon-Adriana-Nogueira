import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import GlobalStateContext from '../context/GlobalStateContext'
import { goToPaginaDetalhe } from '../routes/coordenadas'
import { format } from 'date-fns'




function PostCard(props){
    const navigate= useNavigate()
    const {setters} = useContext(GlobalStateContext)
    const {setPost} = setters
    const { id, userId, title, body, createdAt, voteSum, commentCount } = props.post;

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");
   
    const goToComments = () => {
        setPost(props.post)
        goToPaginaDetalhe(navigate, id)
    }
    return(
        <article>
        <h3>{title}</h3> 
        <span><b>Autor:</b>{userId}</span>   
        <p>Criado em {date}</p>
        <img src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória do post" />
            <p><b>Descrição: </b>{body}</p>
        <p>Votos: {voteSum ? voteSum: 0}</p>
        <button>Votar em " Não Gostei"</button>
        <br/>
        <button>Votar em Gostei"</button>
        <p>Comentarios: {commentCount ? commentCount : 0 }</p>
        {props.isfeed &&
        <button onClick={goToComments}>Ver comentarios"</button>}

        </article>

    )
}
export default PostCard