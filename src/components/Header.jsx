import { Theme } from "../themes/Theme";
import { Box, Stack } from "@mui/material";
import NomeEmpresa from "./NomeEmpresa";
import NewTransection from "./NewTransection";

function Header() {
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
            <NomeEmpresa />
          </Stack>
          <Stack direction={"row"}>
            <NewTransection />
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Header;
