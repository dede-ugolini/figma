import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import image from '../assets/image.png';
import { useTransaction } from "../context/TransactionContext";
import NewTransection from "./transactions/NewTransection";

export default function Header() {

  const { setOpen } = useTransaction();

  return (
    <>
      <Box sx={(theme) => ({
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.header
      })}>
        <Box sx={{
          width: '80%',
          minHeight: '20vh',
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center'
        }}>
          <Stack direction={"row"}>
            <img src={image} alt="Finance" width={180} height={50} />
          </Stack>
          <Stack direction={"row"}>
            <Button // Botão do header que abre o dialog para nova transação
              onClick={() => setOpen(true)}
              color="primary"
              variant="contained"
            >
              Nova transação
            </Button>
            {open && (<NewTransection />)}
          </Stack>
        </Box>
      </Box>
    </>
  )
}
