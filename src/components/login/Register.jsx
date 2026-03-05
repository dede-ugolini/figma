import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useState } from 'react';

import { createUser } from "../../service/post/createUser.js";
import { Paper } from "@mui/material";

import { useForm } from "react-hook-form";

export default function Register() {

  console.log("render");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      password: ""
    }
  });

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickClose = () => {
    setOpen(false);
  }

  const onSubmit = async (data) => {
    const status = await createUser(data);

    if (status == 201) {
      setMessage("Usuário cadastrado com sucesso!");
      setOpenAlert(true);
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }

    else if (status == 400) {
      setMessage("Usuário existente");
      setOpenAlert(true);
      setSuccess(false);
    }

    else if (status == 500) {
      setMessage(" Erro interno de servidor, tente novamente mais tarde");
      setOpenAlert(true);
      setSuccess(false);
    }

    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde");
      setOpenAlert(true);
      setSuccess(false);
    }
    reset();
  }

  return (
    <>
      {/* Botão usado pelo componente de login para opção de cadastro de novo usuário */}
      <Button onClick={handleClickOpen} variant={"contained"}>
        Cadastrar
      </Button>

      <Dialog open={open} onClose={handleClickClose} sx={(theme) => ({
        "& .MuiDialog-paper": { // Precisa alterar essa classe para alterar todo o background, inclusive aquela borda desgraçada que não mudava de cor
          backgroundColor: theme.palette.background.paper
        }
      })}>
        <Stack spacing={2} component="form" onSubmit={handleSubmit(data => onSubmit(data))} sx={{
          margin: "20px",
          width: '450px',
          height: "450px",

          // color: Theme.palette.primary.contrastText
        }}>
          <DialogContent>
            <DialogTitle>
              Cadastrar novo usuário
              <Button // Botão para fechar dialog do cadastro
                onClick={handleClickClose}
                sx={(theme) => ({
                  position: "absolute", right: 8, top: 8, backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText
                })}
              >
                X
              </Button>
            </DialogTitle>

            <Stack spacing={2}>
              <TextField // Text field que coleta o input do nome de usuario
                {...register("user", { required: "This field is required" })}
                helperText={errors.user?.message}
                label={"Digite o nome de usuario"}
                //onChange={(e) => setUser(e.target.value)}
                sx={{
                  // backgroundColor: Theme.palette.secondary.light,
                  borderRadius: "10px",
                  '& .MuiInputBase-input': { // Cor do texto de input do usuário
                    // color: Theme.palette.primary.contrastText,
                  },
                  '& .MuiInputLabel-root': { // Cor do label do TextField
                    // color: Theme.palette.primary.contrastText,
                  },
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      // borderColor: Theme.palette.primary.contrastText, // Cor do TextField ao passar o mouse
                    },
                    '&.Mui-focused fieldset': {
                      // borderColor: Theme.palette.secondary.grayThree, // Cor do TextField ao clicá-lo
                    },
                  },
                  input: { color: "" }
                }}
              />

              <TextField // Text field que coleta o input da senha
                {...register("password", { required: "This field is required" })}
                helperText={errors.password?.message}
                error={!!errors.message}
                label={"Digite a senha"}
                type="password"
                sx={{
                  // backgroundColor: Theme.palette.secondary.light,
                  borderRadius: "10px",
                  '& .MuiInputBase-input': { // Cor do texto de input do usuário
                    // color: Theme.palette.primary.contrastText,
                  },
                  '& .MuiInputLabel-root': { // Cor do label do TextField
                    // color: Theme.palette.primary.contrastText,
                  },
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      // borderColor: Theme.palette.primary.contrastText, // Cor do TextField ao passar o mouse
                    },
                    '&.Mui-focused fieldset': {
                      // borderColor: Theme.palette.secondary.grayThree, // Cor do TextField ao clicá-lo
                    },
                  },
                  input: { color: ""/* Theme.palette.primary.contrastText  */ }
                }}
              />
              <Button // Botão que faz o envio dos dados do novo usuário para cadastrar
                type="submit"
                variant="contained"

                sx={{
                  // color: Theme.palette.primary.contrastText,
                  // backgroundColor: Theme.palette.primary.dark,
                  '&:hover': {
                    // backgroundColor: Theme.palette.primary.main
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
