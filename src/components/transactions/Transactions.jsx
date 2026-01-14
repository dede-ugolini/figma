import { Table, TableBody, TableCell, TableContainer, TableRow, TablePagination, TableFooter } from "@mui/material";
import { useState } from "react"
import { Theme } from "../../themes/Theme";

//TODO: Adicionar sorting
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
      <TableContainer sx={{ backgroundColor: Theme.palette.secondary.grayThree, width: "100%" }}>
        <Table sx={{ minWidth: '80%' }}>


          <TableBody>
            {displayData.map((data) => (
              <TableRow key={data.id} >
                <TableCell sx={{ // Célula que armazena a descriçãp
                  color: Theme.palette.text.base,
                  borderBottom: "1px solid #000000"
                }}
                >{data.description}
                </TableCell>

                <TableCell align="right" sx={{ // Célula que armazena o preço
                  color: data.type === 'saida' ? 'red' : Theme.palette.primary.main,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >R$ {data.price.toFixed(2)}
                </TableCell>

                <TableCell align="right" sx={{ // Célula que armazena categoria
                  color: Theme.palette.text.base,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >{data.category}
                </TableCell>

                <TableCell align="right" sx={{ // Célula que armazena data
                  color: Theme.palette.text.base,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >{data.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter sx={{
            paddingTop: 100
          }}>
            <TablePagination // Componente que faz a paginação das transações
              count={transactions.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 20]}
              labelRowsPerPage={"Linhas por página"}
              sx={{
                color: Theme.palette.text.base,
                fontWeight: 600,
                borderBottom: "1px solid #000000",
                paddingTop: 30,
              }}
            >
            </TablePagination>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
