import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ search, setSearch }) {

  return (

    <>
      <Stack direction='collumn' width={"100%"}>
        <TextField
          label={"Busque uma Transação"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="filled"
          sx={{
            '& .MuiInputLabel-root': { // Cor do label do TextField
              color: "text.base",
            },
            '& .MuiInputBase-input': { // Cor do texto de input do usuário
              color: "text.base",
            },
            width: "100%",
            paddingRight: { xs: "5%", sm: "1%" }
          }}>
        </TextField>
        <Stack sx={{
          width: "20%"
        }}>
          <Button
            variant="outlined"
            sx={{
              height: "100%",
              textTransform: "none",
              ":hover": {
                color: "primary.contrastText"
              }
            }}
          >
            <SearchIcon></SearchIcon>
            <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
              Buscar
            </Typography>
          </Button>
        </Stack>

      </Stack>
    </>
  );
}
