import React, {useState, useEffect} from 'react';

import FriendList from './FriendList';

import Me from '../img/me.png';
import Friend from '../img/friend.png';
import Nitro from '../img/Nitro.png';
import MicTrue from '../img/microfone-true.png';
import MicFalse from '../img/microfone-false.png';
import FoneTrue from '../img/fone-true.png';
import FoneFalse from '../img/fone-false.png';
import Config from '../img/config.png';

import './style.css';

export default function Friends({amigos, setAmigos}) {

    const [mutado, setMutado] = useState(false);
    const [ouvindo, setOuvindo] = useState(false);

    const Apagar = (pos) => {
        const newList = amigos;
        newList.splice(pos, 1);
        setAmigos(
            newList.map((value)=>{
                return value;
            })
        );
    }

    return (
        <section className="Friends" >
            <div>
                <FriendList img={Me} txt="Amigos" isFriend={false}/>
                <FriendList img={Nitro} txt="Nitro" isFriend={false}/>
            </div>
            <h5>MENSAGENS DIRETAS</h5>
            {amigos.map((value, index)=>(
                <FriendList
                    img={Friend}
                    txt={value.name}
                    isFriend
                    pos={index}
                    Apagar={Apagar}
                />
            ))}
            <div className="Me" >
                <img src={Me} alt="asda"/>
                <div className="Me-name" >
                    <label id="me" >Me</label>
                    <label>#1234</label>
                </div>
                <div className="buttons" >
                    <button className="me-btn"
                    onClick={()=>setMutado(!mutado)}>
                        {mutado ?
                            <img src={MicFalse}
                            alt="mutado"/>
                            :
                            <img src={MicTrue} alt="desmutado"/>
                        }
                    </button>
                    <button className="me-btn"
                    onClick={()=>setOuvindo(!ouvindo)}>
                        {ouvindo ?
                            <img src={FoneTrue} alt="ouvindo"/>
                        :
                            <img src={FoneFalse} alt="asd"/>
                        }
                    </button>
                    <button className="me-btn" >
                        <img src={Config} alt="config"/>
                    </button>
                </div>
            </div>
        </section>
    );
}