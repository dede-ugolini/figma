import { Navigate } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useForm } from 'react-hook-form';
import useLogin from '../../hooks/useLogin.js';
import { darkTheme } from "../../themes/Theme.jsx";
import Register from './Register.jsx';


export default function Login() {

  const { open, logged, success, message, handleLogin } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  }
    = useForm({
      defaultValues: {
        user: "", password: ""
      }
    });

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
        <Stack component={"form"} p={5} bgcolor={"background.paper"} onSubmit={handleSubmit(data => handleLogin(data.user, data.password))} sx={{
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
