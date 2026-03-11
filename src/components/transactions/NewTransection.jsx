import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";

import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTransaction } from "../../context/TransactionContext";

import useNewTransaction from "../../hooks/useNewTransaction.js"

// TODO: Adicionar Click-Away Listener para fechar o Dialog sem precisar clicar no botão de fechar
export default function NewTransection() {

  console.log("Render from new transection");

  const { success, openAlert, message, handleNewTransaction, handleCloseAlert } = useNewTransaction();

  const { open, setOpen } = useTransaction();

  function clickToClose() {
    reset();
    setOpen(false);
  }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      price: 0,
      category: "",
      type: "",
    },
  });

  const type = watch("type");

  return (
    <>
      <Dialog
        open={open}
        slotProps={{
          paper: {
            sx: (theme) => ({
              backgroundColor: theme.palette.background.header
            })
          },
        }}
      >
        <Stack component={"form"} onSubmit={handleSubmit(data => handleNewTransaction(data.description, data.price, data.category, data.type))}>
          <Stack spacing={2} sx={{
            margin: "20px",
            width: "350px",
            height: "450px"
          }}>
            <h4>Nova Transação</h4>

            <TextField // Textfield que coleta o input de descrição
              {...register("description", { required: "This field is required" })}
              helperText={errors.description?.message}
              error={!!errors.description}
              label={"Descrição"}
              placeholder="Descrição do produto"
              multiline={true}
              sx={(theme) => ({
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.header : theme.palette.background.paper
                },
                '& .MuiInputLabel-root': { // Cor do label do TextField
                  color: theme.palette.text.base,
                },
                '& .MuiInputBase-input': { // Cor do texto de input do usuário
                  color: theme.palette.text.base,
                },
              })}
            >
            </TextField>

            <TextField // Textfield que coleta o input do preço
              {...register("price", { required: "This field is required" })}
              helperText={errors.price?.message}
              error={!!errors.price}
              label={"Preço"}
              type="number"
              placeholder="Preço do produto"
              sx={(theme) => ({
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.header : theme.palette.background.paper
                },
                '& .MuiInputLabel-root': { // Cor do label do TextField
                  color: theme.palette.text.base,
                },
                '& .MuiInputBase-input': { // Cor do texto de input do usuário
                  color: theme.palette.text.base,
                },
              })}
            />

            <TextField // TextField que coleta o input da categoria
              {...register("category", { required: "This field is required" })}
              helperText={errors.category?.message}
              error={!!errors.category}
              label={"Categoria"}
              placeholder="Categoria do produto"
              sx={(theme) => ({
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.header : theme.palette.background.paper
                },
                '& .MuiInputLabel-root': { // Cor do label do TextField
                  color: theme.palette.text.base,
                },
                '& .MuiInputBase-input': { // Cor do texto de input do usuário
                  color: theme.palette.text.base,
                },
              })}
            />

            <Stack spacing={1} direction={'row'} sx={{ // Stack que armazena os botões de entradas e saídas
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Button // Botão que define se transação é do tipo entrada
                onClick={() => setValue("type", "entrada")}
                sx={{
                  width: "50%",
                  borderRadius: "9px",
                  backgroundColor: type === "entrada" ? "primary.light" : "background.paper",
                  color: "primary.contrastText",
                  ":hover": {
                    backgroundColor: type === "entrada" ? "primary.main" : "background.paper",
                  },
                  ":active": {
                    backgroundColor: "primary.main"
                  }
                }}><ArrowCircleUp color={type === "entrada" ? "#FFF" : "success"}></ArrowCircleUp>Entrada</Button>

              <Button // Botão que define se transação é do tipo saída 
                onClick={() => setValue("type", "saida")}
                sx={{
                  width: "50%",
                  borderRadius: "9px",
                  backgroundColor: type === "saida" ? "#AA2834" : "background.default",
                  color: "primary.contrastText",
                  ":hover": {
                    backgroundColor: type === "saida" ? "#AA2834" : "background.paper",
                  },
                  ":active": {
                    backgroundColor: "#AA2834",
                  }
                }}><ArrowCircleDown sx={{ color: type === "saida" ? "FFFFFF" : '#F75A68' }}></ArrowCircleDown>Saída</Button>
            </Stack>

            <Button // Botão que cadastra nova transação
              type="submit"
              variant="contained"
            >
              <Typography>Cadastrar</Typography>
            </Button>

          </Stack>

        </Stack>

        <Button // Botão para fechar Dialog.
          onClick={clickToClose}
          sx={{
            position: "absolute",
            alignSelf: "flex-end",
            color: "text.base",
          }}
        >X</Button>
      </Dialog >

      <Snackbar // Snackbar em caso de falha
        open={openAlert && !success}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert severity="error" variant="filled" onClose={handleCloseAlert}>{message}</Alert>
      </Snackbar>

      <Snackbar // Snackbar em caso de sucesso
        open={openAlert && success}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert severity="success" variant="filled" onClose={handleCloseAlert}>{message}</Alert>
      </Snackbar>
    </>
  )
}
