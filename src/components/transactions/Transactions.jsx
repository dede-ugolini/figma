import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableFooter } from "@mui/material";
import { useState } from "react"

export default function Transactions({ transactions }) {

  const [page, setPage] = useState(0); // Diferente do componente Pagination, o componente TablePagination utiliza zero-based index, então a primeira pagina utiliza o index 0 e não 1 como em Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const displayData = transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Catergoria</TableCell>
              <TableCell align="right">Data</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {displayData.map((data) => (
              <TableRow key={data.id}>
                <TableCell >{data.description}</TableCell>
                <TableCell align="right" sx={{
                  color: data.type === 'saida' ? 'red' : 'green'
                }}
                >R$ {data.price}
                </TableCell>
                <TableCell align="right">{data.category}</TableCell>
                <TableCell align="right">{data.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TablePagination // Componente que faz a paginação das transações
              count={transactions.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 20]}
            >
            </TablePagination>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
