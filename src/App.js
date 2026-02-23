
import './App.css';
import Bienvenida from './component/Bienvenida';
import Login from './component/login';
import PrivateRoute from './component/PrivateRoute';
import UserList from './component/UserList';
import {UserContext} from './context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element= {<Login />}/>
          <Route path='/bienvenida' element= {<Bienvenida />}/>
          <Route path='/usuarios' element= {<PrivateRoute><UserList /></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
