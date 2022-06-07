




function PostCard(){
    const {id, userId, title, createAt, voteSum, commentCoutn} = props.PostCard

    const date = createAt && format(new Date(createAt), `dd/MM/yyyy`)
   
    return(
        <article>
        <h3>{title}</h3> 
        <span><b>Autor:</b>{userId}</span>   
        <p>Criado em {date}</p>
        <img src={"https://picsum.photos/200/300?random=" = id} alt="Imagem aleatoria do post"/>
        <p><b>Descrição:</b>{body}</p>
        <p>Votos: {voteSum ? voteSum: 0}</p>
        <button>Votar em " Não Gostei"</button>
        <br/>
        <button>Votar em Gostei"</button>
        <p>Comentarios: {commentCoutn ? commentCoutn : 0 }</p>
        <button>Ver comentarios"</button>

        </article>

    )
}
export default PostCard