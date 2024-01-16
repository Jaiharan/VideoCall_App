import {Route, Routes} from 'react-router-dom';
import './App.css';
import LobbyScreen from './screens/Lobby.jsx';
import RoomPage from './screens/Room.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LobbyScreen/>}/>
        <Route path='/room/:roomid' element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
