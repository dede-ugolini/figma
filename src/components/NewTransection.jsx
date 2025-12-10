import { Button, Dialog, Stack } from "@mui/material";
import { Theme } from "../themes/Theme";
import { useState } from "react";
import { ArrowCircleUp, ArrowCircleDown } from "@mui/icons-material";
import { MyTextField } from "./MyTextField";

function NewTransection({ onAddTransaction }) {
  const [open, setOpen] = useState(false);
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
    const newTransaction = {
      description,
      price: Number(price),
      category,
      type,
      date: new Date().toISOString
    };

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
        }}>Nova transação</Button >

      <Dialog
        open={open}
        slotProps={{
          root: {
            sx: {
              backgroundColor: "transparent",
            }
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

            <MyTextField // Primeiro textfield
              label={"Descrição"}
              value={description}
              setInputValue={setDescription}
            ></MyTextField>

            <MyTextField
              label={"Preço"}
              value={price}
              setInputValue={setPrice}
            ></MyTextField>

            <MyTextField
              label={"Categoria"}
              value={category}
              setInputValue={setCategory}
            ></MyTextField>

            <Stack spacing={1} direction={'row'} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Button
                onClick={() => setType("entrada")}
                sx={{
                  borderRadius: "6px",
                  backgroundColor: Theme.palette.secondary.light,
                  color: Theme.palette.primary.contrastText,
                }}><ArrowCircleUp color="success"></ArrowCircleUp>Entrada</Button>

              <Button
                onClick={() => setType("saida")}
                sx={{
                  borderRadius: "6px",
                  backgroundColor: Theme.palette.secondary.light,
                  color: Theme.palette.primary.contrastText,
                }}><ArrowCircleDown color="error"></ArrowCircleDown>Saída</Button>
            </Stack>

            <Button onClick={register} variant="contained" sx={{
              backgroundColor: Theme.palette.primary.light,
            }}>Cadastrar</Button>
          </Stack>

        </Stack>

        <Button // Botão para fechar Dialog.
          onClick={clickToClose}
          sx={{
            position: "absolute",
            alignSelf: "flex-end",
            color: Theme.palette.primary.contrastText,
          }}
        >X</Button>
      </Dialog>
    </>
  )
}
export default NewTransection;
