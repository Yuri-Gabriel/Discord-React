import logo from './logo.svg';
import './App.css'

import ServerBar from './componets/ServerBar';
import Friends from './componets/Friends';
import Header from './componets/Header';
import Chat from './componets/Chat';

function App() {
  return (
    <div className="App">
      <ServerBar/>
      <section>
        <Header/>
        <section>
          <Friends/>
          <Chat/>
        </section>
        
      </section>
    </div>
  );
}

export default App;
