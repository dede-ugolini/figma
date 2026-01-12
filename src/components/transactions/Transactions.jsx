import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Transactions({ transactions }) {
  return (
    <>
      {transactions.map((t) => (
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell >{t.description}</TableCell>
                <TableCell align="right" sx={{
                  color: t.type === 'saida' ? 'red' : 'green'
                }}>{t.price}</TableCell>
                <TableCell align="right">{t.category}</TableCell>
                <TableCell align="right">{t.date}</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
}

export default Transactions;
