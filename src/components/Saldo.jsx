import {
  AttachMoney,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@mui/icons-material";

import { Theme } from '../themes/Theme'
import { Box } from '@mui/material'
import BasicCards from "./BasicCards";

function Saldo({ entradas, saidas, total }) {

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
      <BasicCards // Card que exibe as entradas
        info={entradas > 0 ? entradas : "0.00"}
        name="Entradas"
        color={Theme.palette.primary.main}
        Icon={ArrowCircleUp}
      />
      <BasicCards // Card que exibe as saídas
        info={saidas > 0 ? saidas : "0.00"}
        name="Saidas"
        color={"red"}
        Icon={ArrowCircleDown}
      />
      <BasicCards // Card que exibe o total
        info={total > 0 ? total : "0.00"}
        name="Total"
        color={Theme.palette.primary.contrastText}
        Icon={AttachMoney}
      />
    </Box>
  );
}

export default Saldo;
