import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import { Missions } from './components/Missions';
import { MyProfile } from './components/MyProfile';
import { Rockets } from './components/Rockets';

function App() {
  return (
  <>
  <Router>
    <div>
      <ul>
        <Link to ='/'>Rockets</Link>
        <Link to='/Missions'>Missions</Link>
        <Link to='/MyProfile'>| My Profile</Link>
      </ul>
    <Routes>
      <Route path='/' element={<Rockets/>}/>
      <Route path='/Missions' element={<Missions/>}/>
      <Route path='/MyProfile' element={<MyProfile/>}/>
    </Routes>
    </div>
  </Router>

  </>
  );
}

export default App;
