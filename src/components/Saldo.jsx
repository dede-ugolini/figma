import {
  AttachMoney,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@mui/icons-material";

import { Theme } from '../themes/Theme'
import { Box } from '@mui/material'
import BasicCards from "./BasicCards";

function Saldo() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "180px",
        justifyContent: "space-between",
        overflow: "auto",
      }}
    >
      <BasicCards
        info="17.400,00"
        name="Entradas"
        color={Theme.palette.secondary.grayTwo}
        Icon={ArrowCircleUp}
      />
      <BasicCards
        info="1.259,00"
        name="Saidas"
        color={Theme.palette.primary.negative}
        Icon={ArrowCircleDown}
      />
      <BasicCards
        info="16.141,00"
        name="Total"
        color={Theme.palette.primary.contrastText}
        Icon={AttachMoney}
      />
    </Box>
  );
}

export default Saldo;
