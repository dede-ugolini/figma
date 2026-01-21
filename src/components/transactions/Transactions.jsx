import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Theme } from "../../themes/Theme";
import { useTransaction } from "../../context/TransactionContext";

//TODO: Adicionar sorting
export default function Transactions({ transactions }) {

  const { page, setPage, rowsPerPage, setRowsPerPage, totalPages } = useTransaction();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <>
      <TableContainer sx={{ backgroundColor: Theme.palette.secondary.grayThree, width: "100%" }}>
        <Table sx={{ minWidth: '80%' }}>


          <TableBody>
            {transactions.map((data) => (
              <TableRow key={data.id} >

                <TableCell align="left" sx={{ // Célula que armazena data
                  color: Theme.palette.text.base,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >{data.id}
                </TableCell>

                <TableCell sx={{ // Célula que armazena a descriçãp
                  color: Theme.palette.text.base,
                  borderBottom: "1px solid #000000"
                }}
                >{data.nome}
                </TableCell>

                <TableCell align="right" sx={{ // Célula que armazena o preço
                  color: data.tipo === 'saida' ? '#F75A68' : Theme.palette.primary.main,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >R$ {parseFloat(data.valor).toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </TableCell>

                <TableCell align="right" sx={{ // Célula que armazena categoria
                  color: Theme.palette.text.base,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >{data.categoria}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

          <TableFooter sx={{
            paddingTop: 100
          }}>
            <TablePagination // Componente que faz a paginação das transações
              count={totalPages}
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
