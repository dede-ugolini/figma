import { Navigate } from 'react-router-dom';

import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';

import { useState } from 'react';

import Register from './Register.jsx';

import { login } from '../../service/post/login.js';

import { darkTheme } from "../../themes/Theme.jsx"

export default function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const verify = async () => {

    if (user.length === 0 || password.length === 0) {
      console.log("Não é permitido user ou password vazio");
      setMessage("Não é permitido usuário nem senha vazios");
      setOpen(true);
      setSuccess(false);
      return;
    }

    const validUser = await login(user, password);

    if (validUser === 200) {
      setMessage("Login bem sucedido!")
      setOpen(true);
      setSuccess(true);
      setTimeout(() => {
        setLogged(true);
      }, 1000);

    }

    else if (validUser === 401) {
      setMessage("Credenciais inválidas!");
      setLogged(false)
      setOpen(true);
      setSuccess(false);
    }

    else if (validUser === 500) {
      setMessage("Erro de servidor!");
      setLogged(false)
      setOpen(true);
      setSuccess(false);
    }

    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde!");
      setLogged(false);
      setOpen(true);
      setSuccess(false);
    }
  };

  if (logged) {
    return <Navigate to={"/home"} />
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack sx={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // color: Theme.palette.primary.contrastText,
      }}
      >
        <Stack component={Paper} p={5} sx={{
          alignItems: 'center'
        }}>
          <Stack>
            <h1>Login</h1>
          </Stack>
          { /*Para aprender de vez: 
          Componentes não herdam props, apenas CSS, então se eu fazer <Stack spacing={2}><Stack>Está Stack não herda spacing 2</Stack></Stack>
          Então se eu declarar na primeira Stack color: primary.main todos os componentes filhos devem herdar? Nem sempre
          Alguns componentes como TextField não herda porque é um componente composto por outros componentes como FormControl, InputLabel,OutlinedInput/InputBase
          Cada parte tem seu estilo próprio, com cores definidas internamente pelo tema, então para mudar a cor do texto do input precisamos fazer essa coisa horrosa mesmo
         '& .MuiInputBase-input': {
           color: Theme.palette.primary.contrastText,
         }
        */
          }
          <Stack spacing={2}>
            <TextField
              label={"Digite o nome de usuário"}
              onChange={(e) => setUser(e.target.value)}
            >
            </TextField>

            <TextField // Text field que coleta input de senha do usuario
              label={"Digite a senha do usuario"}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            >
            </TextField>
          </Stack>


          <Stack spacing={2} direction={'row'} sx={{
            paddingTop: 5
          }}>
            <Button // Botão para entrar
              variant='contained'
              onClick={verify}
            >
              Entrar
            </Button>

            <Register />
          </Stack>
        </Stack>

        <Snackbar // Snackbar em caso de falha de login
          open={open && !success}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Alert variant='filled' severity='error' onClose={() => setOpen(false)}>
            <AlertTitle>Atenção!</AlertTitle>
            {message}
          </Alert>
        </Snackbar>

        <Snackbar // Snackbar em caso de sucesso de login
          open={open && success}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Alert variant='filled' severity='success' onClose={() => setOpen(false)}>
            <AlertTitle>Bem vindo!</AlertTitle>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </ThemeProvider>

  )

}
