import React from 'react';

import Search from './Search';
import Ajuda from './Ajuda';

import Me from '../img/me.png';
import AddGrup from '../img/AddGrup.png';
import CaixaEntrada from '../img/CaixaEntrada.png';
import Help from '../img/Help.png';

import './style.css';


/*

*/

export default function Header() {
    return (
        <header>
            <section>
                <Search/>
                <ul>
                    <li>
                        <div className="Amigos" >
                            <img src={Me} alt="" />
                            <span>Amigos</span>
                        </div>
                    </li>
                    <hr/>
                    <li>
                        <div className="Disponivel" >
                            <span>Disponivel</span>
                        </div>
                    </li>
                    <li>
                        <div className="Options" >
                            <span>Todos</span>
                        </div>
                    </li>
                    <li>
                        <div className="Options" >
                            <span>Pendente</span>
                        </div>
                    </li>
                    <li>
                        <div className="Options" >
                            <span>Bloqueados</span>
                        </div>
                    </li>
                    <li>
                        <div className="Add-Friend" >
                            <span>Adicionar amigo</span>
                        </div>
                    </li>
                </ul>
            </section>
            <div className="Help">
                <Ajuda id="new-grup" msg="Novo grupo privado" img={AddGrup}/>
                <hr/>
                <Ajuda msg="Caixa de entarda" img={CaixaEntrada}/>
                <Ajuda msg="Ajuda" img={Help}/>
            </div>
        </header>
    );
}