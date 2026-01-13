import { Stack, Button, Box, TextField, } from '@mui/material'
import { Theme } from '../../themes/Theme';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ search, setSearch }) {

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
            label={"Busque uma Transação"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              color: "secondary.main",
              backgroundColor: Theme.palette.secondary.main,
              borderRadius: "10px",
              '& .MuiInputBase-input': { // Cor do texto de input do usuário
                color: Theme.palette.primary.contrastText,
              },
              '& .MuiInputLabel-root': { // Cor do label do TextField
                color: Theme.palette.primary.contrastText,
              },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: Theme.palette.primary.contrastText, // Cor do TextField ao passar o mouse
                },
                '&.Mui-focused fieldset': {
                  borderColor: Theme.palette.secondary.grayThree, // Cor do TextField ao clicá-lo
                },
              },
              input: { color: "" },
              border: "none"
            }}
          />
        </Stack>
        <Stack sx={{
          width: "20%"
        }}>
          <Button
            variant="outlined"
            disableElevation={true}
            sx={{
              borderRadius: "10%",
              backgroundColor: Theme.palette.secondary.main,
              height: "100%",
              color: Theme.palette.primary.main,
              fontSize: "14px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: Theme.palette.primary.light,
                color: Theme.palette.primary.contrastText
              },
              border: 'none'
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

export default SearchBar;
