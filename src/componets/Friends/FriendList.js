import React from 'react';

import Close from '../img/close.png';

import './style.css';

export default function FriendList({img, txt, isFriend}) {
    return (
            <div className="Friend-Chat" >
                <img src={img} alt="" />
                <span>{txt}</span>
                {isFriend &&
                    <img id="close" src={Close} alt="" />
                }
            </div>
    );
}