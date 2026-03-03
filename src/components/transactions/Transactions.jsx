import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Alert, IconButton, Snackbar, Tooltip, FormControlLabel, Switch, Paper, Typography } from "@mui/material";

import { useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

import { useTransaction } from "../../context/TransactionContext";
import { deleteTransactions } from "../../service/delete/deleteTransactions";

//TODO: Adicionar sorting
export default function Transactions({ transactions }) {

  const { page, setPage, rowsPerPage, setRowsPerPage, totalPages, setAddTransaction } = useTransaction();

  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [dense, setDense] = useState(false);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const handleDelete = async (id) => {
    const status = await deleteTransactions(id);

    if (status === 200) {
      setMessage("Transação deletada com sucesso!");
      setSuccess(true);
      setOpenAlert(true);
      setAddTransaction(true);

      setAddTransaction(true);
    }
    else if (status === 401) {
      setMessage("Não autorizado!");
      setSuccess(false);
      setOpenAlert(true);
    }
    else if (status === 404) {
      setMessage("Transação não encontrada!");
      setSuccess(false);
      setOpenAlert(true);
    }
    else if (status === 500) {
      setMessage("Erro interno de servidor, tente novamente mais tarde");
      setSuccess(false);
      setOpenAlert(true);
    }
    else {
      setMessage("Algum erro ocorreu, tente novamente mais tarde!");
      setSuccess(false);
      setOpenAlert(true);
    }
  }

  return (
    <>
      <TableContainer component={Paper} sx={{/*  backgroundColor: Theme.palette.secondary.grayThree,  */width: "100%" }}>
        <Table size={dense ? "small" : "medium"} sx={{ minWidth: '80%' }}>


          <TableBody>
            {transactions.map((data) => (
              <TableRow key={data.id} >

                <TableCell> {/* Célula que armazena o nome da transação*/}
                  <Typography color="text.base">
                    {data.nome}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography color={data.tipo === 'saida' ? '#F75A68' : "primary.main"}> {/* Célula que armazena o preço */}
                    R$ {parseFloat(data.valor).toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>
                </TableCell>

                <TableCell align="right"> {/* Célula que armazena a categoria */}
                  <Typography color="text.base">
                    {data.categoria}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography color="text.base">
                    {new Date(data.data).toLocaleDateString("pt-br")}
                  </Typography>
                </TableCell>

                <TableCell align="right">
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
                sx={{
                  color: "text.base",
                  fontWeight: 600,
                  borderColor: "background.paper",
                  paddingTop: 30,
                }}
              >
              </TablePagination>
            </TableRow>
          </TableFooter>
        </Table>

        <FormControlLabel
          label="Agrupar"
          control={<Switch checked={dense} onChange={() => setDense(!dense)} />}
          sx={{
            display: "flex",
            justifyContent: "right"
          }}
        >
        </FormControlLabel>

      </TableContainer>

      <Snackbar // Em caso de erro
        open={openAlert && !success}
        autoHideDuration={2000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpenAlert(false)}>
          {message}
        </Alert>
      </Snackbar>

      <Snackbar // Em caso de sucesso
        open={openAlert && success}
        autoHideDuration={2000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpenAlert(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
