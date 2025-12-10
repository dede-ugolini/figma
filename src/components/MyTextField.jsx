import { TextField } from "@mui/material";
import { Theme } from "../themes/Theme.jsx";

export const MyTextField = ({ label, inputValue, setInputValue }) => {

  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}

      sx={{
        flexGrow: "1",
        backgroundColor: Theme.palette.background.header,
        borderRadius: "6px",
        border: 'none',
      }}
    />
  );
};
