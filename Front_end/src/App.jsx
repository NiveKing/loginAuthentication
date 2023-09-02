import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Login from "../src/components/login.jsx";
import Register from './components/register.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
