import React, {useState} from 'react';
import './App.css'

import ServerBar from './componets/ServerBar';
import Friends from './componets/Friends';
import Header from './componets/Header';
import AddFriend from './componets/Header/AddFriend';
import Chat from './componets/Chat';

function App() {

  const [add, setAdd] = useState(false);
  const [amigos, setAmigos] = useState([{
    name: "João"
  }]);

  return (
    <div className="App">
      <ServerBar/>
      <section>
        <Header setAdd={setAdd} />
        <section>
          <Friends amigos={amigos} setAmigos={setAmigos} />
          <Chat/>
        </section>
      </section>
      {add &&
        <AddFriend
          amigos={amigos}
          setAmigos={setAmigos}
          setAdd={setAdd}
        /> 
      }
    </div>
  );
}

export default App;
