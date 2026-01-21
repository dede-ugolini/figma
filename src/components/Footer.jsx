import { Paper, Stack } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Footer({ setDark }) {
  return (
    <>
      <Stack sx={{
        height: "10vh",
        width: "100%",
      }}>

        <Stack sx={{
          width: "80%"
        }}>

          <IconButton onClick={() => setDark(true)}>
            <DarkModeIcon />
          </IconButton>

          <IconButton color="sucess" onClick={() => setDark(false)}>
            <LightModeIcon color="success" />
          </IconButton>

        </Stack>
      </Stack>
    </>
  )
}
