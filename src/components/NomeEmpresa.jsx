import ParkIcon from '@mui/icons-material/Park';
import { Theme } from '../themes/Theme';

function NomeEmpresa() {
  return (
    <>
      <ParkIcon sx={{
        color: Theme.palette.primary.main
      }}></ParkIcon>
      <h1 style={{ fontSize: "20px", fontStyle: "normal" }}>Finance</h1>;
    </>
  )
}
export default NomeEmpresa;
