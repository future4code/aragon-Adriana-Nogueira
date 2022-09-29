import React, { useState, useRef } from 'react';
import dice1 from '../imagens/dice1.svg';
import dice2 from '../imagens/dice2.svg';
import dice3 from '../imagens/dice3.svg';
import dice4 from '../imagens/dice4.svg';
import dice5 from '../imagens/dice5.svg';
import dice6 from '../imagens/dice6.svg';
import './Dice.css';

function Dices() {
    const [result] = useState('Clique no botão para iniciar');
    const user = useRef(null);
    const resultDice = useRef(null);
    let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    const roll = () => {
        // Generate random number
        const firstRandomNum = Math.floor(Math.random() * 6);
console.log(firstRandomNum)
        user.current.setAttribute('src', diceImages[firstRandomNum]);

    };

    return (
        <>
            <div className='dice-wrapper'>
                <div className='dice-area'>

                    <img src={dice1} ref={user} alt='Dice' />
                </div>

            </div>
            <p className='result' ref={resultDice}>
                {result}
            </p>
            <button onClick={roll} className='btn'>
                Jogue
            </button>


        </>
    );
}

export default Dices;