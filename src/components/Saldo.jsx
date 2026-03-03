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
      <Stack direction={"row"} spacing={4} sx={{ width: "100%", height: "12vh" }}>
        <Card sx={{ width: "33%" }}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: "10%", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Entradas</Typography>
              <Typography variant="h6"> <ArrowCircleUpIcon color="primary" /> </Typography>
            </Stack>
            <Typography variant="h5" fontWeight={"bold"}> R$ {entradas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
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
            <Typography variant="h5" fontWeight={"bold"}> R$ {saidas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={(theme) => ({ background: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main, width: "33%" })}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: "10%", paddingBottom: "0px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Total</Typography>
              <Typography variant="h6" sx={{ color: "white" }}> <AttachMoneyIcon /> </Typography>
            </Stack>
            <Typography variant="h5" fontWeight={"bold"} sx={{ color: "white" }}> R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
}
