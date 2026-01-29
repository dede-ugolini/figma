import { Theme } from '../themes/Theme.jsx'
import Stack from '@mui/material/Stack'

import Header from './Header.jsx'
import { TransactionProvider } from '../context/TransactionContext.jsx'
import TransactionContainer from './transactions/TransactionsContainer.jsx'
import { Navigate } from 'react-router'

export default function Main() {

  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken === null) {
    return <Navigate to="/" />
  }

  return (
    <>
      <TransactionProvider>
        <Stack sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: Theme.palette.primary.contrastText,
        }}
        >
          <Stack sx={{ // Stack do Cabeçalho
            height: "200px",
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

        </Stack>
      </TransactionProvider>

    </>

  )
}
