import { Theme } from "../themes/Theme";
import { Box, Stack, Button } from "@mui/material";
import NewTransection from "./transactions/NewTransection";
import { useTransaction } from "../context/TransactionContext";
import image from '../assets/image.png';

function Header() {

  const { setOpen } = useTransaction();

  return (
    <>
      <Box sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: Theme.palette.background.header,
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
            {open && (<NewTransection />)}

          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Header;
