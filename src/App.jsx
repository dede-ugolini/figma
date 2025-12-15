import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/login/Login.jsx'
import Main from './components/Main.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
