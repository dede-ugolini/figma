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

// TODO: Adicionar Click-Away Listener para fechar o Dialog sem precisar clicar no botão de fechar
export default function NewTransection() {

  const { open, setOpen, addTransaction } = useTransaction();

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("entrada");
  const [success, setSuccess] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");

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

  return (
    <>
      <Dialog
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: Theme.palette.secondary.light,
            color: Theme.palette.primary.contrastText
          }
        }}
      >
        <Stack>
          <Stack spacing={2} sx={{
            margin: "20px",
            width: "350px",
            height: "450px"
          }}>
            <h4>Nova Transação</h4>

            <TextField // Textfield que coleta o input de descrição
              label={"Descrição"}
              value={description}
              placeholder="Digite a descrição do produto"
              multiline={true}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                backgroundColor: Theme.palette.secondary.main,
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
              }}
            >
            </TextField>

            <TextField // Textfield que coleta o input do preço
              label={"Preço"}
              type="number"
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Digite o preço do produto"
              sx={{
                backgroundColor: Theme.palette.secondary.main,
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
              }}
            />

            <TextField // TextField que coleta o input da categoria
              label={"Categoria"}
              value={category}
              placeholder="Digite a categoria do produto"
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                backgroundColor: Theme.palette.secondary.main,
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
              }}
            />

            <Stack spacing={1} direction={'row'} sx={{ // Stack que armazena os botões de entradas e saídas
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Button // Botão que define se transação é do tipo entrada
                onClick={() => setType("entrada")}
                sx={{
                  borderRadius: "6px",
                  backgroundColor: Theme.palette.secondary.main,
                  color: Theme.palette.primary.contrastText,
                }}><ArrowCircleUp color="success"></ArrowCircleUp>Entrada</Button>

              <Button // Botão que define se transação é do tipo saída 
                onClick={() => setType("saida")}
                sx={{
                  borderRadius: "6px",
                  backgroundColor: Theme.palette.secondary.main,
                  color: Theme.palette.primary.contrastText,
                }}><ArrowCircleDown color="error"></ArrowCircleDown>Saída</Button>
            </Stack>

            <Button // Botão que cadatra nova transação
              onClick={register} variant="contained" sx={{
                backgroundColor: Theme.palette.primary.main,
                ":hover": {
                  backgroundColor: Theme.palette.primary.light
                }
              }}
            >Cadastrar
            </Button>

          </Stack>

        </Stack>

        <Button // Botão para fechar Dialog.
          onClick={clickToClose}
          sx={{
            position: "absolute",
            alignSelf: "flex-end",
            color: Theme.palette.primary.contrastText,
            ":hover": {
              backgroundColor: Theme.palette.primary.light,
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
