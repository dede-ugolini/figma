import {
  AttachMoney,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@mui/icons-material";

import { Theme } from '../themes/Theme';
import { Card, CardContent, CardActions, Stack } from '@mui/material';

export default function Saldo({ entradas, saidas, total }) {

  return (
    <>
      <Stack direction={"row"} spacing={4} sx={{ width: "100%" }}>
        <Card sx={{ backgroundColor: Theme.palette.secondary.grayThree, color: Theme.palette.text.tittle, width: "33%", padding: "10px" }}>
          <CardContent sx={{ paddingLeft: "40px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <h4>Entradas </h4>
              <ArrowCircleUp />
            </Stack>
            <h1> R$ {entradas.toFixed(2)}</h1>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{ backgroundColor: Theme.palette.secondary.grayThree, color: Theme.palette.text.tittle, width: "33%" }}>
          <CardContent sx={{ paddingLeft: "40px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <h4>Saídas  </h4>
              <ArrowCircleDown sx={{ color: "red" }} />
            </Stack>
            <h1> R$ {saidas.toFixed(2)}</h1>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{ backgroundColor: Theme.palette.primary.dark, color: Theme.palette.text.tittle, width: "33%" }}>
          <CardContent sx={{ paddingLeft: "40px", paddingTop: "30px", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <h4>Total</h4>
              <AttachMoney />
            </Stack>
            <h1 style={{ color: total >= 0 ? "" : "red" }}> R$ {total.toFixed(2)}</h1>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
}
