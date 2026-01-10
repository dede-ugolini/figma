import { Button, Dialog, Stack, TextField } from "@mui/material";
import { Theme } from "../../themes/Theme";
import { useState } from "react";
import { ArrowCircleUp, ArrowCircleDown } from "@mui/icons-material";

function NewTransection({ setValueEntrada, setValueSaida, onAddTransaction }) {

  const [open, setOpen] = useState(true);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("entrada");

  function clickToOpen() {
    setOpen(true);
  }

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
      description,
      price: Number(price),
      category,
      type,
      date: fomarmatedDate,
    };

    if (newTransaction.type === 'entrada') {
      setValueEntrada(prev => prev + price);
    }
    else {
      setValueSaida(prev => prev + price);
    }

    console.log("Registrando:", newTransaction);

    // Enviando o objeto de transação para o componente que me chamou.
    onAddTransaction(newTransaction)

    //Limpando os campos
    setDescription("");
    setPrice("");
    setCategory("");
    setType("");

    // Fecha o dialog
    setOpen(false);
  }
  return (
    <>
      <Button // Botão do header que abre o dialog para nova transação
        onClick={clickToOpen}
        variant="outlined"
        size="medium"
        sx={{
          backgroundColor: Theme.palette.primary.light,
          color: Theme.palette.primary.contrastText,
          fontSize: "14px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: Theme.palette.primary.light,
          },
          border: 'none'
        }}>Nova transação</Button>

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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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

            <Stack spacing={1} direction={'row'} sx={{
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
    </>
  )
}
export default NewTransection;
