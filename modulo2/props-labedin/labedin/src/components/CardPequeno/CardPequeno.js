import React from 'react';

import style from 'styled-components'

const SmallCard = style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

`
const SmallCardImg = style.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;

`
const SmallCardH4 = style.h4`
    margin-bottom: 15px;

`
const SmallCardDiv = style.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardPequeno(props) {
    return (
        <SmallCard>
            <SmallCardImg src={ props.imagem } />
            <SmallCardDiv>
                <SmallCardH4>{ props.nome }</SmallCardH4>
                <p>{ props.descricao }</p>
            </SmallCardDiv>
        </SmallCard>
    )
}

export default CardPequeno;