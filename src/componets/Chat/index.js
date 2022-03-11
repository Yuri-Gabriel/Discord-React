import React from 'react';
import './style.css';

import Background from '../img/chat-background.png';

export default function Chat() {
    return (
        <div className="chat" >
            <div className="chat-background">
                <img src={Background} alt="background" />
                <p>Ninguem por perto para brincar com o Wumpus</p>
            </div>
            <div className="ative" >
                <div className="ative-Title" >
                    <h2>Ativo agora</h2>
                </div>
                <div className="ative-Msg" >
                    <h4>
                        Por enquanto, está quieto...
                    </h4>
                    <p>
                        Quando um(a) amigo(a) começa uma atividade, como jogar um jogo ou bater papo por voz, mostraremos aqui!
                    </p>
                </div>
            </div>
        </div>
    );
}