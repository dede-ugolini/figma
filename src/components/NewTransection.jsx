import { Button } from "@mui/material";
import { Theme } from "../themes/Theme";

function NewTransection() {
  return (
    <>
      <Button
        variant="outlined"
        size="medium"
        sx={{
          backgroundColor: Theme.palette.primary.light,
          color: Theme.palette.primary.contrastText,
          fontSize: "14px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: Theme.palette.primary.light,
          },
          border: 'none'
        }}>Nova transação</Button >
    </>
  )
}
export default NewTransection;
