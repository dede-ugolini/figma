import { Stack, Button, Box, } from '@mui/material'
import { Theme } from '../themes/Theme';
import { MyTextField } from './MyTextField';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ search, setSearch }) {

  return (

    <>
      <Stack direction='collumn' sx={{
        width: "100%",
        height: "40px"
      }}>
        <Stack sx={{
          width: "70%"
        }}>
          <MyTextField
            label={"Busque uma Transação"}
            inputValue={search}
            setInputValue={setSearch}
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
              },
              border: 'none'
            }}
          ><SearchIcon></SearchIcon>Buscar</Button>
        </Stack>

      </Stack>
    </>
  );
}

export default SearchBar;
