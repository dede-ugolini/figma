import { Theme } from "../themes/Theme";
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box sx={{
        width: '100%',
        minHeight: '180px',
        background: Theme.palette.background.header
      }}>
      </Box>
    </>
  )
}

export default Header;
