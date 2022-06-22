import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../context/GlobalStateContext'
import { goToPaginaDetalhe } from '../routes/coordenadas'
import { format } from 'date-fns'
import { requestCreatePostVote } from '../serviços/requests'
import { requestChangePostVote, requestDeletePostVote } from "../serviços/requests"
import styled from "styled-components"
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 5px;
  border-radius: 1px solid black;
  @media #{$BREAKPOINT-DESK} {
    height: 360px;
  }
  svg {
    margin-right: 5px;
  }
`;
const Article = styled.article`
 padding: 2px;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 20%;
  height: 50px;
  `



function PostCard(props) {
    const navigate = useNavigate()
    const { setters, getters } = useContext(GlobalStateContext)
    const [isDownVoted, setIsDownVoted] = useState(false)
    const [isUpVoted, setIsUpVoted] = useState(false)
    const { setPost } = setters
    const { getPosts } = getters
    const { id, userId, title, body,
        createdAt, voteSum, commentCount, userVote } = props.post;

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");
    useEffect(() => {
        if (userVote) {
            userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true)
        }
    }, [userVote])
    const goToComments = () => {
        setPost(props.post);
        goToPaginaDetalhe(navigate, id);
    };


    const chooseVote = (typeVote) => {
        if (typeVote === "up") {
            if (isDownVoted) {
                requestChangePostVote(id, 1, getPosts);
                setIsUpVoted(true);
                setIsDownVoted(false);
            } else {
                requestCreatePostVote(id, 1, getPosts);
                setIsUpVoted(true);
            };
        } else {
            if (isUpVoted) {
                requestChangePostVote(id, -1, getPosts);
                setIsDownVoted(true);
                setIsUpVoted(false);
            } else {
                requestCreatePostVote(id, -1, getPosts);
                setIsDownVoted(true);
            };
        };
    };

    const removeVote = (typeVote) => {
        requestDeletePostVote(id, getPosts);
        typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
    };


    const showVoteButtons = props.isFeed && (
        <>

            {userVote && isDownVoted ?
                <Botao onClick={() => removeVote("down")}>Remover voto "Não Gostei"</Botao>
                : <Botao onClick={() => chooseVote("down")}>
                    {isUpVoted ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
                </Botao>
            }
            <br />
            {userVote && isUpVoted ?
                <Botao onClick={() => removeVote("up")}>Remover voto "Gostei"</Botao>
                : <Botao onClick={() => chooseVote("up")}>
                    {isDownVoted ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
                </Botao>
            }
        </>
    );

    return (
        <article>
            <Article>
                <h3>{title}</h3>
            </Article>
            <Article>
                <span><b>Autor: </b>{userId}</span>
            </Article>
            <Article>            <p>Criado em {date}</p>
            </Article>

            <ImgContainer>

                <img src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória do post" />
            </ImgContainer>
            <Article>
                <p><b>Descrição: </b>{body}</p>
            </Article>
            <Article>
                <p>Votos: {voteSum ? voteSum : 0}</p>
            </Article>
<Article>
            {showVoteButtons}
            </Article>
            <Article>
            <p>Comentários: {commentCount ? commentCount : 0}</p>
            </Article>
            <Article>
            {props.isFeed && <Botao onClick={goToComments}>Ver comentários</Botao>}
            </Article>
            <hr />
        </article>
    );
};

export default PostCard;