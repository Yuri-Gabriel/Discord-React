import React, {useEffect, useState} from 'react';

import Search from './Search';
import Ajuda from './Ajuda';
import AddFriend from '../Chat/AddFriend';

import Me from '../img/me.png';
import AddGrup from '../img/AddGrup.png';
import CaixaEntrada from '../img/CaixaEntrada.png';
import Help from '../img/Help.png';

import './style.css';


export default function Header({setAdd, add}) {

    const [btnStyle, setBtnStyle] = useState({});

    useEffect(()=>{
        if (add) {
            setBtnStyle({
                btn: {
                    backgroundColor: "#36393F"
                },
                span: {
                    color: "#3BA55D"
                }
            });
        } else {
            setBtnStyle({
                btn: {
                    backgroundColor: "#3BA55D"
                },
                span: {
                    color: "#FFFFFF"
                }
                
            });
        }
    },[add]);

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
                        <button
                            style={btnStyle.btn}
                            className="Add-Friend"
                            onClick={()=>setAdd(true)}
                        >
                            <span
                                style={btnStyle.span}
                            >
                                Adicionar amigo
                            </span>
                        </button>
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