import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

// import { Theme } from '../themes/Theme';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Saldo({ entradas, saidas, total }) {

  return (
    <>
      <Stack direction={"row"} spacing={4} sx={{ width: "100%" }}>
        <Card sx={{ /* backgroundColor: Theme.palette.secondary.grayThree, */ /* color: Theme.palette.text.title,  */width: "33%" }}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: "10%", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Entradas</Typography>
              <Typography variant="h6"> <ArrowCircleUpIcon color="primary" /> </Typography>
            </Stack>
            <Typography variant="h5"> R$ {entradas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{/*  backgroundColor: Theme.palette.secondary.grayThree, color: Theme.palette.text.title,  */width: "33%" }}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: "10%", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Saídas</Typography>
              <Typography variant="h6"> <ArrowCircleDownIcon sx={{ color: '#F75A68' }} /> </Typography>
            </Stack>
            <Typography variant="h5"> R$ {saidas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{/*  backgroundColor: Theme.palette.primary.dark, color: Theme.palette.text.title,  */width: "33%" }}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: "10%", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6"> <AttachMoneyIcon /> </Typography>
            </Stack>
            <Typography variant="h5"> R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
}
