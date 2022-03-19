import React, {useState} from 'react';
import './App.css'

import ServerBar from './componets/ServerBar';
import Friends from './componets/Friends';
import Header from './componets/Header';
import Chat from './componets/Chat';

function App() {

  const [add, setAdd] = useState(true);
  const [amigos, setAmigos] = useState([{
    name: "João"
  }]);

  return (
    <div className="App">
      <ServerBar/>
      <section>
        <Header setAdd={setAdd} add={add} />
        <section>
          <Friends
            amigos={amigos}
            setAmigos={setAmigos}
          />
          <Chat
            amigos={amigos}
            setAmigos={setAmigos}
            add={add}
            setAdd={setAdd}
          />
        </section>
      </section>
    </div>
  );
}

export default App;
