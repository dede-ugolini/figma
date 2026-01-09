import { Stack, Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from 'react'
import { Theme } from '../../themes/Theme.jsx'

export default function Register({ loginData, onRegister }) {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickClose = () => {
    setOpen(false);
  }

  const register = () => {

    const existingUser = loginData.find((index) => index.login === user && index.senha === password);

    if (existingUser) {
      console.log("Usuário já existente!");
      console.log(loginData);
    }
    // TODO: Adicionar validador que não permite inputs vazios
    else {
      const newUser = { login: user, senha: password }
      const newLoginData = loginData.concat(newUser);
      onRegister(newLoginData);
      console.log("Novo registro adicionado");
      setOpen(false);
    }
  }

  return (
    <>
      <Button onClick={handleClickOpen} sx={{
        color: Theme.palette.primary.contrastText,
        backgroundColor: Theme.palette.primary.dark,
        ":hover": {
          backgroundColor: Theme.palette.primary.main
        }

      }}>Cadastrar</Button>
      <Dialog open={open} onClose={handleClickClose}>
        <Stack spacing={2} sx={{
          margin: "20px",
          width: '450px',
          height: "450px"
        }}>

          <DialogContent>
            <DialogTitle>
              Cadastrar novo usuário
              <Button // Botão para fechar dialog do cadastro
                onClick={handleClickClose}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                X
              </Button>
            </DialogTitle>

            <Stack>
              <TextField // Text field que coleta o input do nome de usuario
                label={"Digite o nome de usuario"}
                onChange={(e) => setUser(e.target.value)}
              />
              <TextField // Text field que coleta o input da senha
                label={"Digite a senha"}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button // Botão que faz o envio dos dados do novo usuário para cadastrar
                onClick={register}>Confirmar</Button>
            </Stack>

          </DialogContent>
        </Stack>
      </Dialog>
    </>
  )
}
