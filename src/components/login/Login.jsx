import { Navigate } from 'react-router-dom';

import { Button, Stack, TextField } from "@mui/material";
import { useState } from 'react'

import { Theme } from '../themes/Theme.jsx'
import { MyTextField } from './MyTextField.jsx'
import Register from './Register.jsx'

import loginApi from '../api/login.json'

//TODO: Implementar proteção de rota, para que usuário que não esteja logado não consiga acessar Main
//TODO: Estilizar a pagina de login porque está horrível de feia

export default function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  const [loginData, setLogin] = useState([...loginApi]);

  const verify = () => {
    const validUser = loginApi.find(index => index.login === user && index.senha === password);
    if (validUser) {
      console.log("Você está logado.");
      setLogged(true);
    }
    else {
      console.log("Usuário ou senha errados, digite novamente.");
      setLogged(false);
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: Theme.palette.primary.contrastText,
    }}
    >
      <Stack sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Stack>
          <h3>Login</h3>
        </Stack>

        <MyTextField // Text field que coleta input do nome de usuário
          label={'Digite o nome de usuário'}
          inputValue={user}
          setInputValue={setUser}
        >
        </MyTextField>

        <TextField // Text field que coleta input de senha do usuario
          label={"Digite a senha do usuario"}
          type='password'
          onChange={(e) => setPassword(e.target.value)}>
        </TextField>

        <Button // Botão para entrar
          onClick={verify}>
          Entrar
        </Button>

        <Register // Botão para registrar novo usuário
          loginData={loginData} onRegister={handleRegister} />
      </Stack>
    </Stack>
  )

}
