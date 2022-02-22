import React from 'react';

export default function Ajuda({id, msg, img}) {
    return (
        <div id={id} className="Ajuda">
            <img src={img} alt="" className="Ajuda-img"/>
            <div className="Ajuda-msg" >
                <div></div>
                <span>{msg}</span>
            </div>
        </div>
    );
}