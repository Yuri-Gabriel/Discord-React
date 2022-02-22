import React from 'react';
import './style.css';

import Background from '../img/chat-background.png';

export default function Chat() {
    return (
        <div className="chat" >
            <div className="chat-background">
                <img src={Background} alt="background"/>
            </div>
        </div>
    );
}