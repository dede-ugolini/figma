import { Stack, Button, Box, } from '@mui/material'
import { Theme } from '../themes/Theme';
import { MyTextField } from './MyTextField';
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {

  return (

    <>
      <Stack direction='collumn' sx={{
        width: "100%",
        height: "100px"
      }}>
        <Box sx={{
          width: "70%"
        }}>
          <MyTextField label={"Busque uma Transação"} />
        </Box>
        <Box sx={{
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
              },
              border: 'none'
            }}
          ><SearchIcon></SearchIcon>Buscar</Button>
        </Box>

      </Stack>
    </>
  );
}

export default SearchBar;
