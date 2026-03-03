import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import { Theme } from "./themes/Theme.jsx"

import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import Login from './components/login/Login.jsx'
import Main from './components/Main.jsx'
import { CssBaseline } from '@mui/material';


function App() {

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
