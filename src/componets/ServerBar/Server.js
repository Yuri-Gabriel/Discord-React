import React from 'react';
import logo from '../img/logo.png';

function Server({name}) {
  return (
    <div className="Server" >
        <div className="Serverimg">
            <img src={logo} alt="img"  />
        </div>
        <div className="line"></div>
        <div className="name-pont" >
            <div className="pont" ></div>
            <div className="name" >{name}</div>
        </div>
        
    </div>
  );
}

export default Server;
