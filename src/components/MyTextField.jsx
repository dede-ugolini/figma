import { TextField } from "@mui/material";
import { Theme } from "../themes/Theme.jsx";


export const MyTextField = ({ sx = {}, label, ...props }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"

      sx={{
        flexGrow: "1",
        backgroundColor: Theme.palette.background.header,
        borderRadius: "6px",
        border: 'none',
        ...sx,
      }}
    />
  );
};
