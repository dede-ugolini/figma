import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";

import { Theme } from "../../themes/Theme";

import { useState } from "react";
import { useTransaction } from "../../context/TransactionContext";
import { Paper, Typography } from "@mui/material";

// TODO: Adicionar Click-Away Listener para fechar o Dialog sem precisar clicar no botão de fechar
export default function NewTransection() {

  const { open, setOpen, addTransaction } = useTransaction();

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [entradaActive, setEntradaActive] = useState(false);
  const [saidaActive, setSaidaActive] = useState(false);

  function clickToClose() {
    setOpen(false);
  }

  function register() {
    const data = new Date();
    const day = String(data.getDate());
    const month = String(data.getMonth() + 1);
    const year = String(data.getFullYear());
    const fomarmatedDate = `${day}/${month}/${year}`;

    const newTransaction = {
      id: Date.now(),
      description,
      price: Number(price),
      category,
      type,
      date: fomarmatedDate,
    };

    if (isNaN(newTransaction.price)) {
      setMessage("Por favor, digite um número válido!");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    if (newTransaction.description.length === 0) {
      setMessage("Descrição não pode estar vazia");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    if (newTransaction.price === 0) {
      setMessage("Preço precisa ser maior que zero!");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    if (newTransaction.price < 0) {
      setMessage("Preço não pode ser valor negativo!");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    if (newTransaction.category.length === 0) {
      setMessage("Categoria não pode estar vazia!");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    if (newTransaction.type.length === 0) {
      setMessage("Transação precisa ser saída ou entrada");
      setSuccess(false);
      setOpenAlert(true);
      return;
    }

    setMessage("Transação cadastrada com sucesso!");
    setSuccess(true);
    setOpenAlert(true);

    // Enviando o objeto de transação para o componente que me chamou.
    addTransaction(newTransaction)

    //Limpando os campos
    setDescription("");
    setPrice(0);
    setCategory("");
    setType("");
    // Fecha o dialog
    setOpen(false);
  }

  const handleClickEntradas = () => {
    setType("entrada");
    setEntradaActive(true);
    setSaidaActive(false);
  }

  const handleClickSaidas = () => {
    setType("saida");
    setEntradaActive(false);
    setSaidaActive(true);
  }

  return (
    <>
      <Dialog
        open={open}
        slotProps={{
          paper: {
            sx: { backgroundColor: "#29292E" }
          }
        }}
      >
        <Stack>
          <Stack spacing={2} sx={{
            margin: "20px",
            width: "350px",
            height: "450px"
          }}>
            <h4 style={{ color: Theme.palette.primary.contrastText }}>Nova Transação</h4>

            <TextField // Textfield que coleta o input de descrição
              component={Paper}
              label={"Descrição"}
              value={description}
              placeholder="Descrição do produto"
              multiline={true}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { // Cor do label do TextField
                  color: Theme.palette.text.base,
                },
                '& .MuiInputBase-input': { // Cor do texto de input do usuário
                  color: Theme.palette.text.base,
                },
              }}
            >
            </TextField>

            <TextField // Textfield que coleta o input do preço
              component={Paper}
              label={"Preço"}
              type="number"
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Preço do produto"
              sx={{
                '& .MuiInputLabel-root': { // Cor do label do TextField
                  color: Theme.palette.text.base,
                },
                '& .MuiInputBase-input': { // Cor do texto de input do usuário
                  color: Theme.palette.text.base,
                },
              }}
            />

            <TextField // TextField que coleta o input da categoria
              component={Paper}
              label={"Categoria"}
              value={category}
              placeholder="Categoria do produto"
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { // Cor do label do TextField
                  color: Theme.palette.text.base,
                },
                '& .MuiInputBase-input': { // Cor do texto de input do usuário
                  color: Theme.palette.text.base,
                },
              }}
            />

            <Stack spacing={1} direction={'row'} sx={{ // Stack que armazena os botões de entradas e saídas
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Button // Botão que define se transação é do tipo entrada
                onClick={handleClickEntradas}
                sx={{
                  width: "50%",
                  borderRadius: "9px",
                  backgroundColor: entradaActive ? "primary.main" : Theme.palette.secondary.main,
                  color: Theme.palette.primary.contrastText,
                  ":hover": {
                    backgroundColor: entradaActive ? "primary.main" : "secondary.light",
                  },
                  ":active": {
                    backgroundColor: "primary.main"
                  }
                }}><ArrowCircleUp color={entradaActive ? "#FFF" : "success"}></ArrowCircleUp>Entrada</Button>

              <Button // Botão que define se transação é do tipo saída 
                onClick={handleClickSaidas}
                sx={{
                  width: "50%",
                  borderRadius: "9px",
                  backgroundColor: saidaActive ? "#AA2834" : Theme.palette.secondary.main,
                  color: Theme.palette.primary.contrastText,
                  ":hover": {
                    backgroundColor: saidaActive ? "#AA2834" : "secondary.light",
                  },
                  ":active": {
                    backgroundColor: "#AA2834",
                  }
                }}><ArrowCircleDown sx={{ color: saidaActive ? "FFFFFF" : '#F75A68' }}></ArrowCircleDown>Saída</Button>
            </Stack>

            <Button // Botão que cadatra nova transação
              onClick={register} variant="contained" sx={{
                textTransform: "none",
              }}>
              <Typography>Cadastrar</Typography>
            </Button>

          </Stack>

        </Stack>

        <Button // Botão para fechar Dialog.
          onClick={clickToClose}
          sx={{
            position: "absolute",
            alignSelf: "flex-end",
            color: Theme.palette.text.base,
            ":hover": {
              backgroundColor: Theme.palette.primary.main
            }
          }}
        >X</Button>
      </Dialog>

      <Snackbar // Snackbar em caso de falha
        open={openAlert && !success}
        autoHideDuration={2000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert severity="error" variant="filled" onClose={() => setOpenAlert(false)}>{message}</Alert>
      </Snackbar>

      <Snackbar // Snackbar em caso de sucesso
        open={openAlert && success}
        autoHideDuration={2000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpenAlert(false)}>{message}</Alert>
      </Snackbar>
    </>
  )
}
