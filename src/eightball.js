import React, { useState } from 'react';
import './eightball.css';
import pickAnswer from './answers.json';
import { choice } from './random';

const EightBall = ({ answers = pickAnswer }) => {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: 'black'
    });

    const handleClick = (e) => {
        setAnswer(choice(answers));
    }

    return (
        <div
            className = "Eightball"
            onClick = { handleClick }
            style={{ backgroundColor: answer.color }}
        >
            <b>{ answer.msg }</b>
        </div>
    )
}

export default EightBall;