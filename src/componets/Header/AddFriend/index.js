import React, {useState} from 'react';

import './style.css';

import Exit from '../../img/close.png'

export default function AddFriend({amigos, setAmigos, setAdd}) {

    const [newFriend, setNewFriend] = useState({
        name: ""
    })

    const AddFriend = (name) => {
        let newFriendList = amigos
        newFriendList.unshift({
            name: name
        });
        setAmigos(newFriendList);
        setAdd(false);
    }

    return (
        <div className="AddFriend-Body" >
            <div className="AddFriend" >
                <div className="header-Add" >
                    <h2>ADICIONAR AMIGO</h2>
                    <button title="Fechar" className="close-Add" onClick={()=>setAdd(false)} >
                        <img src={Exit} alt="exit" />
                    </button>
                </div>
                <form>
                    <div>
                        <p>
                            Você pode adicionar amigos com a Discord Tag deles. CuIdAdO cOm As MaIúScUlAs!
                        </p>
                    </div>
                    <div id="form" >
                        <input className="input-Add" type="text" value={newFriend.name} onChange={(e)=>setNewFriend({
                            name: e.target.value
                        })} />
                        <input title="Adicionar" className="btn-Add" type="button" value="Adicionar amigo" onClick={()=>AddFriend(newFriend.name)} />
                    </div>
                </form>
            </div>
        </div>
    );
}