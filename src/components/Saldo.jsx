import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import { Theme } from '../themes/Theme';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";

export default function Saldo({ entradas, saidas, total }) {

  return (
    <>
      <Stack direction={"row"} spacing={4} sx={{ width: "100%" }}>
        <Card sx={{ backgroundColor: Theme.palette.secondary.grayThree, color: Theme.palette.text.title, width: "33%", padding: "10px" }}>
          <CardContent sx={{ paddingLeft: "40px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <h4>Entradas </h4>
              <ArrowCircleUpIcon />
            </Stack>
            <h1> R$ {entradas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{ backgroundColor: Theme.palette.secondary.grayThree, color: Theme.palette.text.title, width: "33%" }}>
          <CardContent sx={{ paddingLeft: "40px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <h4>Saídas  </h4>
              <ArrowCircleDownIcon sx={{ color: '#F75A68' }} />
            </Stack>
            <h1> R$ {saidas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{ backgroundColor: Theme.palette.primary.dark, color: Theme.palette.text.title, width: "33%" }}>
          <CardContent sx={{ paddingLeft: "40px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <h4>Total</h4>
              <AttachMoneyIcon />
            </Stack>
            <h1> R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
}
