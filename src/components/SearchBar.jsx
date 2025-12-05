import { Stack, Button, Box, TextField, Typography } from '@mui/material'
import { Theme } from '../themes/Theme';

function SearchBar() {
  return (
    <Stack direction='row' spacing={3} sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30px',
      margin: '20px'
    }}>
      <TextField
        required
        id="outlined-required"
        label="Buscar uma transação"
        sx={{
          width: '80%',
          height: '100%',
          background: Theme.palette.secondary.light,
          "& .MuiInputLabel-root": {
            color: Theme.palette.primary.contrastText
          },
          /* "& .MuiInputLabel-root.Mui-focused": {
            color:
          },  */
        }}
      />
      <Button variant="outlined" sx={{
        width: '80%',
        height: '100%',
      }}>Buscar</Button>
    </Stack>
  );
}

export default SearchBar;
