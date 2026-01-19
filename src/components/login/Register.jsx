import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useState } from 'react';
import { Theme } from '../../themes/Theme.jsx';

import { createUser } from "../../service/post/createUser.js";

export default function Register() {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickClose = () => {
    setOpen(false);
  }

  const register = async () => {

    if (user.length === 0 || password.length === 0) {
      console.log("Não é permitido usuário ou senha vazios!");
      setMessage("Não é permitido usuário ou senha vazios!");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    const existingUser = await createUser(user, password);

    if (existingUser === 201) {
      console.log("Usuário cadastrado com sucesso!");
      setMessage("Usuário cadastrado com sucesso!");
      setOpenAlert(true);
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }

    else if (existingUser === 400) {
      console.log("Usuário já existente!");
      setMessage("Usuário já está cadastrado!");
      setOpenAlert(true);
      setSuccess(false);
    }

    else if (existingUser === 500) {
      console.log("Erro interno de servidor");
      setMessage("Erro interno de servidor!");
      setOpenAlert(true);
      setSuccess(false);
    }

    else {
      console.log("ALgum erro ocorreu");
      setMessage("Algum erro ocorreu, tente novamente mais tarde");
      setOpenAlert(true);
      setSuccess(false);
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
      }}>Cadastrar
      </Button>

      <Dialog open={open} onClose={handleClickClose} sx={{
        "& .MuiDialog-paper": { // Precisa alterar essa classe para alterar todo o background, inclusive aquela borda desgraçada que não mudava de cor
          backgroundColor: Theme.palette.secondary.light
        }
      }}>
        <Stack spacing={2} sx={{
          margin: "20px",
          width: '450px',
          height: "450px",
          color: Theme.palette.primary.contrastText
        }}>
          <DialogContent>
            <DialogTitle>
              Cadastrar novo usuário
              <Button // Botão para fechar dialog do cadastro
                onClick={handleClickClose}
                sx={{
                  position: "absolute", right: 8, top: 8, color: Theme.palette.primary.contrastText, backgroundColor: Theme.palette.primary.dark,
                  ":hover": { backgroundColor: Theme.palette.primary.light }
                }}
              >
                X
              </Button>
            </DialogTitle>

            <Stack spacing={2}>
              <TextField // Text field que coleta o input do nome de usuario
                label={"Digite o nome de usuario"}
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
                  input: { color: "" }
                }}
              />

              <TextField // Text field que coleta o input da senha
                label={"Digite a senha"}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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
                  input: { color: ""/* Theme.palette.primary.contrastText  */ }
                }}
              />
              <Button // Botão que faz o envio dos dados do novo usuário para cadastrar
                onClick={register}
                sx={{
                  color: Theme.palette.primary.contrastText,
                  backgroundColor: Theme.palette.primary.dark,
                  '&:hover': {
                    backgroundColor: Theme.palette.primary.main
                  }
                }}>
                Confirmar
              </Button>
            </Stack>

          </DialogContent>
        </Stack>
      </Dialog>

      <Snackbar // Snackbar em caso de erro
        open={openAlert && !success}
        autoHideDuration={5000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert severity="error" variant="filled" onClose={() => setOpenAlert(false)}>
          {message}
        </Alert>
      </Snackbar>

      <Snackbar // Snackbar em caso de sucesso 
        open={openAlert && success}
        autoHideDuration={5000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert variant="filled" severity="success" onClose={() => setOpenAlert(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
