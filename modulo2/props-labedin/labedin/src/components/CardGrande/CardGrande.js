import React from 'react';

import style from 'styled-components'

const BigCard = style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`
const ImagemGrande = style.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;


`
const BigCardh4 = style.h4`
margin-bottom: 15px;
`
const BigCardDiv = style.div`
display: flex;
flex-direction: column;
justify-items: flex-start;

`

function CardGrande(props) {

    return (
        <BigCard>
         <ImagemGrande src={ props.imagem } />
            <BigCardDiv>
                <BigCardh4 >{ props.nome }</BigCardh4>
                <p>{ props.descricao }</p>
            </BigCardDiv>
        </BigCard>
    )
}

export default CardGrande;