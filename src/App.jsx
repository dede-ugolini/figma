import { Theme } from './themes/Theme.jsx';
import { Container, Typography, Stack, Box, CardContent } from "@mui/material";
import Saldo from "./components/Saldo.jsx";
import Header from './components/Header.jsx';
import TransactionContainer from './components/TransactionsContainer.jsx'
import Home from './components/Home.jsx'

function App() {

  return (
    <>
      <Stack sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Stack sx={{ // Stack do Cabeçalho
          height: "300px",
          width: "100%"
        }}>
          <Header />
        </Stack>

        <Stack sx={{ // Stack que armazena os 3 cards de saldo e a o container que guarda a barra de pesquisa e transações.
          position: 'relative',
          top: '-10rem',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: '80%'
        }}>
          <Saldo />
          <TransactionContainer />
        </Stack>

        <Box sx={{
          backgroundColor: Theme.palette.background.body,
          width: '100%',
          height: '200vh'
        }}>

        </Box>


      </Stack>
    </>
  )
}
export default App
