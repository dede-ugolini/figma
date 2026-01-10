import { Navigate } from 'react-router-dom';

import { Button, Stack, TextField, Alert, AlertTitle, Snackbar } from "@mui/material";
import { useState } from 'react'

import { Theme } from '../../themes/Theme.jsx'
import Register from './Register.jsx'

import loginApi from '../../api/login.json'

//TODO: Implementar proteção de rota, para que usuário que não esteja logado não consiga acessar Main

export default function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const [loginData, setLogin] = useState([...loginApi]);

  const verify = () => {

    if (user.length === 0 || password.length === 0) {
      console.log("Não é permitido user ou password vazio");
      setMessage("Não é permitido usuário nem senha vazios");
      setOpen(true);
      setSuccess(false);
      return;
    }

    const validUser = loginApi.find(index => index.login === user && index.senha === password);
    if (validUser) {
      console.log("Você está logado.");
      setMessage("Login bem sucedido!")
      setOpen(true);
      setSuccess(true);
      setTimeout(() => {
        setLogged(true);
      }, 1000);

    }
    else {
      console.log("Usuário ou senha errados, digite novamente.");
      setMessage("Usuário ou senha inválidos")
      setLogged(false);
      setOpen(true);
      setSuccess(false);
    }
  };

  if (logged) {
    return <Navigate to={"/Main"} />
  }

  const handleRegister = (newData) => {
    setLogin([...newData]);
  };

  return (
    <Stack sx={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: Theme.palette.primary.contrastText,
    }}
    >
      <Stack spacing={2} sx={{
        display: 'flex',
        justifyContent: 'center',
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
        <TextField
          label={"Digite o nome de usuário"}
          onChange={(e) => setUser(e.target.value)}
          sx={{
            backgroundColor: Theme.palette.secondary.light,
            borderRadius: "10px",
            '& .MuiInputBase-input': { // Cor do texto de input do usuário
              color: Theme.palette.primary.contrastText,
            },
            '& .MuiInputLabel-root': { // Cor do label do TextField
              color: Theme.palette.primary.contrastText,
            },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: Theme.palette.primary.contrastText, // Cor do TextField ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: Theme.palette.secondary.grayThree, // Cor do TextField ao clicá-lo
              },
            },
            input: { color: Theme.palette.primary.contrastText } // Aparentemente ao focar no TextField a cor do label não fica mais aquele azul padrão do MUI
          }}
        >
        </TextField>

        <TextField // Text field que coleta input de senha do usuario
          label={"Digite a senha do usuario"}
          type='password'
          // required={true}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            color: "secondary.main",
            backgroundColor: Theme.palette.secondary.light,
            borderRadius: "10px",
            '& .MuiInputBase-input': { // Cor do texto de input do usuário
              color: Theme.palette.primary.contrastText,
            },
            '& .MuiInputLabel-root': { // Cor do label do TextField
              color: Theme.palette.primary.contrastText,
            },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: Theme.palette.primary.contrastText, // Cor do TextField ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: Theme.palette.secondary.grayThree, // Cor do TextField ao clicá-lo
              },
            },
            input: { color: Theme.palette.primary.contrastText }
          }}
        >
        </TextField>

        <Stack spacing={2} direction={'row'} sx={{
        }}>
          <Button // Botão para entrar
            onClick={verify}
            sx={{
              color: Theme.palette.primary.contrastText,
              backgroundColor: Theme.palette.primary.dark,
              '&:hover': {
                backgroundColor: Theme.palette.primary.main
              }
            }}
          >
            Entrar
          </Button>

          <Register // Botão para registrar novo usuário

            loginData={loginData} onRegister={handleRegister}
          />
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
  )

}
