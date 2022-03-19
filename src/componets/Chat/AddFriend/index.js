import React, {useEffect, useState} from 'react';

import './style.css';

export default function AddFriend({amigos, setAmigos, setAdd}) {

    const [newFriend, setNewFriend] = useState({
        name: ""
    })
    const [btnStyle, setBtnStyle] = useState({})

    const AddFriend = (name) => {
        if (name != "") {
            let newFriendList = amigos
            newFriendList.unshift({
                name: name
            });
            setAmigos(newFriendList);
            setAdd(false);
        }
    }

    useEffect(()=>{
        if (newFriend.name === "") {
            setBtnStyle({
                cursor: "not-allowed",
                backgroundColor: "#454C95",
                color: "rgba(255, 255, 255, 0.527)",
            });
        } else {
            setBtnStyle({
                cursor: "pointer",
                backgroundColor: "#4752C4",
                color: "#FFFFFF",
            });
        }
    }, [newFriend])

    const OnChageInput = (e) => {
        setNewFriend({
            name: e
        })
        
    }
    return (
        <div className="AddFriend" >
            <div className="header-Add" >
                <h4>ADICIONAR AMIGO</h4>
            </div>
            <form>
                <div>
                    <p>
                        Você pode adicionar amigos com a Discord Tag deles. CuIdAdO cOm As MaIúScUlAs!
                    </p>
                </div>
                <div id="form" >
                    <input
                        className="input-Add"
                        type="text"
                        value={newFriend.name}
                        placeholder="Insira um nome de usuario#0000"
                        onChange={
                            (e)=>setNewFriend({
                                name: e.target.value
                            })
                        }
                    />
                    <input
                        style={btnStyle}
                        title="Adicionar"
                        className="btn-Add"
                        type="button"
                        value="Eviar pedido de amizade"
                        onClick={
                            ()=>AddFriend(newFriend.name)
                        }
                    />
                </div>
            </form>
        </div>
    );
}