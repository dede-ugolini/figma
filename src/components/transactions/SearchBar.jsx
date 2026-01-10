import { Stack, Button, Box, TextField, } from '@mui/material'
import { Theme } from '../../themes/Theme';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ search, setSearch }) {

  return (

    <>
      <Stack spacing={2} direction='collumn' sx={{
        width: "100%",
        height: "40px"
      }}>
        <Stack sx={{
          width: "70%"
        }}>
          <TextField
            label={"Busque uma Transação"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              color: "secondary.main",
              backgroundColor: Theme.palette.secondary.light,
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
              input: { color: "" }
            }}
          />
        </Stack>
        <Stack sx={{
          width: "30%"
        }}>
          <Button
            variant="outlined"
            size="medium"
            disableElevation={true}
            sx={{
              backgroundColor: Theme.palette.secondary.main,
              color: Theme.palette.primary.main,
              fontSize: "14px",
              padding: "7px 25px 7px 25px",
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
