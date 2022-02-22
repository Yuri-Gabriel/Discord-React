import React from 'react';
import './style.css';

import Server from './Server';

function ServerBar() {

  return (
    <nav className="ServerBar" >
        <ul className="Server-ul" >
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <hr/>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
            <li className="Server-li" >
                <Server name="inicio" />
            </li>
        </ul>
    </nav>
  );
}

export default ServerBar;
