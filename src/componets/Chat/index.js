import React from 'react';
import './style.css';

import Background from '../img/chat-background.png';
import addFriendBG from '../img/addFriendBG.png';

import AddFriend from './AddFriend';

export default function Chat({add, setAdd, amigos, setAmigos}) {

    return (
        <div className="chat" >
            {add ?
                <div className="chat-background" >
                    <AddFriend
                        amigos={amigos}
                        setAmigos={setAmigos}
                        setAdd={setAdd}
                    />
                    <div className="chat-ImgP" >
                        <img
                            src={addFriendBG}
                            alt="background"
                        />
                        <p>
                            Wumpus está esperando os amigos. Mas você não precisa esperar!
                        </p>
                    </div>
                    
                </div>
                :
                <div 
                    className="chat-background"
                    style={{justifyContent: 'center'}}
                >
                    <img
                        src={Background}
                        alt="background"
                    />
                    <p>
                        Ninguem por perto para brincar com o Wumpus
                    </p>
                </div>
            }
            
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