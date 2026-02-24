

import Bienvenida from './component/Bienvenida';
import Login from './component/login';
import PrivateRoute from './component/PrivateRoute';
import UserList from './component/UserList';
import { UserProvider} from './context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<PrivateRoute>{<Bienvenida />}</PrivateRoute>}/>
          <Route path='/login' element= {<Login />}/>
          <Route path='/bienvenida' element= {<PrivateRoute><Bienvenida /></PrivateRoute>}/>
          <Route path='/usuarios' element= {<PrivateRoute><UserList /></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
