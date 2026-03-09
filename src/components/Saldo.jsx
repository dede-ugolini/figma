import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Saldo({ entradas, saidas, total }) {

  return (
    <>
      <Stack direction={"row"} spacing={{ xs: 1, sm: 4 }} width={"100%"} height={{ xs: "12vh", sm: "17vh" }} sx={{ overflowX: { xs: "auto", sm: "hidden" } }} >
        <Card sx={{ minWidth: { xs: "70vw", sm: "auto" }, flex: { sm: 1 } }}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: { xs: "5%", sm: "10%" }, paddingRight: "10%" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Entradas</Typography>
              <Typography variant="h6"> <ArrowCircleUpIcon color="primary" /> </Typography>
            </Stack>
            <Typography variant="h4" fontWeight={"bold"}> R$ {entradas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
            <Typography variant="body2" color="background.header" sx={{ display: { xs: "flex", sm: "none" } }}>Ultima entrada em 30 de fevereiro</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: { xs: "70vw", sm: "auto" }, flex: { sm: 1 } }}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: { xs: "5%", sm: "10%" }, paddingRight: "10%" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Saídas</Typography>
              <Typography variant="h6"> <ArrowCircleDownIcon sx={{ color: '#F75A68' }} /> </Typography>
            </Stack>
            <Typography variant="h4" fontWeight={"bold"}> R$ {saidas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
            <Typography variant="body2" color="background.header" sx={{ display: { xs: "flex", sm: "none" } }}>Ultima entrada em</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card sx={(theme) => ({ background: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main, minWidth: { xs: "70vw", sm: "auto" }, flex: { sm: 1 } })}>
          <CardContent sx={{ paddingLeft: "10%", paddingTop: { xs: "5%", sm: "10%" }, paddingRight: "10%" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Total</Typography>
              <Typography variant="h6" sx={{ color: "white" }}> <AttachMoneyIcon /> </Typography>
            </Stack>
            <Typography variant="h4" fontWeight={"bold"} sx={{ color: "white" }}> R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </Typography>
            <Typography variant="body2" color="background.header" sx={{ display: { xs: "flex", sm: "none" } }}>Ultima entrada em</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Stack >
    </>
  );
}
