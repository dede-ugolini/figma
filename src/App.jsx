import Name from './components/NomeEmpresa.jsx';
import { Theme } from './themes/Theme.jsx';
import { Container, Typography, Stack, Box } from "@mui/material";
import Saldo from "./components/Saldo.jsx";
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {

  return (
    <>
      <Header />
      <Container sx={{
        position: 'relative',
        top: '-3rem',
      }}>
        <Saldo />
      </Container>
      <SearchBar />

      <Box sx={{
        backgroundColor: Theme.palette.background.body,
        width: '100%',
        height: '200vh'
      }}></Box>

    </>
  )
}
export default App
