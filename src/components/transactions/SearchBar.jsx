import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import SearchIcon from '@mui/icons-material/Search';
import { Theme } from '../../themes/Theme';
import { Paper } from "@mui/material";

export default function SearchBar({ search, setSearch }) {

  return (

    <>
      <Stack direction='collumn' sx={{
        width: "100%",
      }}>
        <Stack sx={{
          width: "80%",
          paddingRight: "1%",
        }}>
          <TextField
            component={Paper}
            label={"Busque uma Transação"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
            sx={{
              '& .MuiInputLabel-root': { // Cor do label do TextField
                color: Theme.palette.text.base,
              },
              '& .MuiInputBase-input': { // Cor do texto de input do usuário
                color: Theme.palette.text.base,
              },
            }}>
          </TextField>
        </Stack>
        <Stack sx={{
          width: "20%"
        }}>
          <Button
            variant="outlined"
            sx={{
              height: "100%",
              textTransform: "none",
              ":hover": {
                color: Theme.palette.primary.contrastText
              }
            }}
          >
            <SearchIcon></SearchIcon>
            Buscar
          </Button>
        </Stack>

      </Stack>
    </>
  );
}
