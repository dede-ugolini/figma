import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Alert, IconButton, Snackbar, Tooltip, FormControlLabel, Switch, Paper, Typography } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

import { useTransaction } from "../../context/TransactionContext";
import useDelete from "../../hooks/useDelete";
import useNewTransaction from "../../hooks/useNewTransaction";

//TODO: Adicionar sorting
export default function Transactions({ transactions }) {

  const {
    page,
    rowsPerPage,
    totalPages,
  } = useTransaction();

  const {
    openAlert,
    message,
    success,
    handleDelete,
    handleCloseAlert
  } = useDelete();

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    dense,
    handleDense }
    = useNewTransaction();

  return (
    <>
      <TableContainer component={Paper} sx={(theme) => ({ background: theme.palette.background.paper })}>
        <Table size={dense ? "small" : "medium"} >

          <TableBody>
            {transactions.map((data) => (
              <TableRow hover key={data.id}>

                <TableCell sx={(theme) => ({
                  borderBottom: "5px solid",
                  borderColor: theme.palette.background.default
                })}> {/* Célula que armazena o nome da transação*/}
                  <Typography color="text.base" variant="body1">
                    {data.nome}
                  </Typography>
                </TableCell>

                <TableCell align="right" sx={(theme) => ({
                  borderBottom: "5px solid",
                  borderColor: theme.palette.background.default
                })}> {/* Célula que armazena o preço */}
                  <Typography color={data.tipo === 'saida' ? '#F75A68' : "primary.main"} variant="body1">
                    R$ {parseFloat(data.valor).toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>
                </TableCell>

                <TableCell align="right" sx={(theme) => ({
                  borderBottom: "5px solid",
                  borderColor: theme.palette.background.default
                })}> {/* Célula que armazena a categoria */}
                  <Typography color="text.base" variant="body1">
                    {data.categoria}
                  </Typography>
                </TableCell>

                <TableCell align="right" sx={(theme) => ({
                  borderBottom: "5px solid",
                  borderColor: theme.palette.background.default
                })}>
                  <Typography color="text.base" variant="body1">
                    {new Date(data.data).toLocaleDateString("pt-br")}
                  </Typography>
                </TableCell>

                <TableCell align="right" sx={(theme) => ({
                  borderBottom: "5px solid",
                  borderColor: theme.palette.background.default
                })}>
                  <IconButton onClick={() => handleDelete(data.id)}>
                    <Tooltip title={"Deletar transação"}>
                      <DeleteIcon sx={{ color: "#F75A68" }} />
                    </Tooltip>
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination // Componente que faz a paginação das transações
                count={totalPages}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                labelRowsPerPage={"Linhas por página"}
                sx={(theme) => ({
                  color: "text.base",
                  fontWeight: 600,
                  borderColor: "background.paper",
                  paddingTop: 30,
                  background: theme.palette.background.paper,
                })}
              >
              </TablePagination>
            </TableRow>
          </TableFooter>
        </Table>

        <FormControlLabel
          label="Agrupar"
          control={<Switch checked={dense} onChange={handleDense} />}
          sx={(theme) => ({
            background: theme.palette.background.paper,
            display: "flex",
            justifyContent: "end",
            margin: 0,
            paddingRight: "1%",
          })}
        >
        </FormControlLabel>

      </TableContainer >

      <Snackbar // Em caso de erro
        open={openAlert && !success}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="success" variant="filled" onClose={handleCloseAlert}>
          {message}
        </Alert>
      </Snackbar>

      <Snackbar // Em caso de sucesso
        open={openAlert && success}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert variant="filled" onClose={handleCloseAlert} sx={(theme) => ({ background: theme.palette.primary.light, color: "#fff" })}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
