import React from 'react';

import Close from '../img/close.png';

import './style.css';

export default function FriendList({img, txt, isFriend, pos, Apagar}) {
    return (
            <div className="Friend-Chat" >
                <div>
                    <img src={img} alt="" />
                    <span>{txt}</span>
                </div>
                {isFriend &&
                    <button title="Desfazer amizade" onClick={()=>Apagar(pos)} >
                        <img 
                        id="close" 
                        src={Close} alt=""
                        />
                    </button>
                }
            </div>
    );
}