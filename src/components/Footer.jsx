import { Stack } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Footer({ setDark }) {
  return (
    <>
      <Stack width={"80%"} direction={"row-reverse"}>

        <IconButton onClick={() => setDark(true)}>
          <DarkModeIcon />
        </IconButton>

        <IconButton onClick={() => setDark(false)}>
          <LightModeIcon />
        </IconButton>

      </Stack>
    </>
  )
}
