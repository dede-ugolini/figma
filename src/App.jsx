import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Theme } from "./themes/Theme.jsx"
import { ThemeProvider } from '@emotion/react';

import Login from './components/login/Login.jsx'
import Main from './components/Main.jsx'
import { CssBaseline } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App
