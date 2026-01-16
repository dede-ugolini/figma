import { Theme } from "../themes/Theme";

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
      <Box sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: Theme.palette.background.paper,
      }}>
        <Box sx={{
          width: '80%',
          minHeight: '180px',
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
              sx={{ textTransform: "none" }}
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
