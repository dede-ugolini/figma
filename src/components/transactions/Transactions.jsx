import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Alert, IconButton, Snackbar, Tooltip } from "@mui/material";

import { useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

import { Theme } from "../../themes/Theme";
import { useTransaction } from "../../context/TransactionContext";
import { deleteTransactions } from "../../service/delete/deleteTransactions";

//TODO: Adicionar sorting
export default function Transactions({ transactions }) {

  const { page, setPage, rowsPerPage, setRowsPerPage, totalPages, setAddTransaction } = useTransaction();

  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePage = (event, newPage) => {
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
      <TableContainer sx={{ backgroundColor: Theme.palette.secondary.grayThree, width: "100%" }}>
        <Table sx={{ minWidth: '80%' }}>


          <TableBody>
            {transactions.map((data) => (
              <TableRow key={data.id} >

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

                <TableCell align="right" sx={{
                  color: Theme.palette.text.base,
                  fontWeight: 600,
                  borderBottom: "1px solid #000000"
                }}
                >
                  {new Date(data.data).toLocaleDateString("pt-br")}
                </TableCell>

                <TableCell align="right" sx={{ // Célula que armezana botão para fazer delete
                  borderBottom: "1px solid #000000"
                }}>
                  <IconButton onClick={() => handleDelete(data.id)}>
                    <Tooltip title={"Deletar transação"}>
                      <DeleteIcon sx={{ color: "#F75A68" }} />
                    </Tooltip>
                  </IconButton>
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
              rowsPerPageOptions={[5, 10, 20, 50, 100]}
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
