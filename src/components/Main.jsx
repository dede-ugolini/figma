import { Theme } from '../themes/Theme.jsx'
import { Stack, Box } from '@mui/material'

import Header from './Header.jsx'
import Saldo from './Saldo.jsx'
import TransactionContainer from './transactions/TransactionsContainer.jsx'

export default function Main() {

  return (
    <>
      <Stack sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: Theme.palette.primary.contrastText,
      }}
      >
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
