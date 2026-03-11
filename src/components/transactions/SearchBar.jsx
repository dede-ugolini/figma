import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useForm } from "react-hook-form";

import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ setSearch }) {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { search: "" }
  });

  const onSubmit = (search) => {
    setSearch(search)
    reset();
  }

  return (

    <>
      <Stack
        direction='collumn'
        width={"100%"}
        component={"form"}
        onSubmit={handleSubmit(data => onSubmit(data.search))}
      >
        <TextField
          {...register("search")}
          label={"Busque uma Transação"}
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
            type="submit"
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
