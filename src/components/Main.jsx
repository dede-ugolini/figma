import Stack from '@mui/material/Stack'

import Header from './Header.jsx'
import { TransactionProvider } from '../context/TransactionContext.jsx'
import TransactionContainer from './transactions/TransactionsContainer.jsx'
import { Button, Paper, ThemeProvider } from '@mui/material'
import Footer from './Footer.jsx'
import { darkTheme, lightTheme } from '../themes/Theme.jsx'
import { responsiveFontSizes } from '@mui/material/styles'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

export default function Main() {

  const [darkMode, setDarkMode] = useState(false);
  // let theme = responsiveFontSizes(darkMode ? darkTheme : lightTheme);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

        <CssBaseline />
        <TransactionProvider>
          <Stack sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //color: Theme.palette.primary.contrastText,
          }}
          >
            <Stack sx={{ // Stack do Cabeçalho
              height: "20vh",
              width: "100%"
            }}>
              <Header />
            </Stack>

            <Stack spacing={5} sx={{ // Stack que armazena os 3 cards de saldo e a o container que guarda a barra de pesquisa e transações.
              position: 'relative',
              top: '-3rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: '80%'
            }}>
              <TransactionContainer />
            </Stack>

            <Button variant='contained'>Hello</Button>

            <Footer setDark={setDarkMode} />
          </Stack>
        </TransactionProvider>

      </ThemeProvider>

    </>

  )
}
