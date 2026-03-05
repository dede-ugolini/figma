import { Navigate } from 'react-router-dom';

import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import Register from './Register.jsx';

import { login } from '../../service/post/login.js';

import { darkTheme } from "../../themes/Theme.jsx"

export default function Login() {

  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }
    = useForm({
      defaultValues: {
        user: "", password: ""
      }
    });

  const onSubmit = async (data) => {

    const status = await login(data.user, data.password);

    if (status === 200) {
      setMessage("Login bem sucedido!")
      setOpen(true);
      setSuccess(true);
      setTimeout(() => {
        setLogged(true);
      }, 1000);
    }

    else if (status === 401) {
      setMessage("Credenciais inválidas!");
      setLogged(false)
      setOpen(true);
      setSuccess(false);
    }

    else if (status === 500) {
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
    reset();
  }

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
      }}
      >
        <Stack component={"form"} p={5} bgcolor={"background.paper"} onSubmit={handleSubmit(data => onSubmit(data))} sx={{
          alignItems: 'center',
        }}>
          <Stack>
            <h1>Login</h1>
          </Stack>
          <Stack spacing={2}>
            <TextField
              {...register("user", { required: "This field is required" })}
              helperText={errors.user?.message}
              error={!!errors.user}
              label={"Digite o nome de usuário"}
            >
            </TextField>

            <TextField // Text field que coleta input de senha do usuario
              {...register("password", { required: "This field is required" })}
              helperText={errors.password?.message}
              error={!!errors.password}
              label={"Digite a senha do usuario"}
              type='password'
            >
            </TextField>
          </Stack>


          <Stack spacing={2} direction={'row'} sx={{
            paddingTop: 5
          }}>
            <Button // Botão para entrar
              variant='contained'
              type='submit'
            >
              Entrar
            </Button>

            {/* Componente que faz cadastro de novo usuário*/}
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
