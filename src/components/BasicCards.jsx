import { Theme } from '../themes/Theme.jsx'
import { Box, Card } from '@mui/material'

function BasicCards({ info, name, Icon, color }) {
  let bgcolor = Theme.palette.secondary.light;
  if (name == "Total") bgcolor = Theme.palette.primary.dark;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "32%",
        height: "65%",
        justifyContent: "space-around",
        backgroundColor: bgcolor,
        color: Theme.palette.primary.contrastText,
      }}
    >
      <Box sx={{ paddingTop: "30PX" }}>
        <h2
          style={{
            fontSize: Theme.typography.card.size,
            fontWeight: "normal",
            color: Theme.palette.secondary.contrastText,
          }}
        >
          {name}
        </h2>
        <p
          style={{
            fontSize: Theme.typography.card.sizePrice,
            fontWeight: "bold"
          }}
        >
          R$ {parseInt(info)}
        </p>
      </Box>
      <Icon
        sx={{
          color: color,
          paddingTop: "20px",
          fontSize: "30px"
        }}
      />
    </Card>
  );
}

export default BasicCards;
