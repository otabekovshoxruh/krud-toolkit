import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import CreateUser from './pages/CreateUser/CreateUser';
import EditUser from './pages/EditUser/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/edit-user/:id' element={<EditUser />} />
    </Routes>
  );
}

export default App;
