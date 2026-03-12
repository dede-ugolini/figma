import { TableHead, TableRow, TableCell, TableSortLabel, Typography } from "@mui/material"

export default function CustomTableHead(props) {

  const {
    order,
    orderBy,
    onRequestSort,
  } = props;

  const headCells = [
    {
      id: 'nome',
      numeric: false,
      label: 'Descrição',
    },
    {
      id: 'valor',
      numeric: true,
      label: 'Preço',
    },
    {
      id: 'categoria',
      numeric: true,
      label: 'Categoria',
    },
    {
      id: 'data',
      numeric: true,
      label: 'Data',
    },
  ];

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow hover>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={(theme) => ({
              borderBottom: "5px solid",
              borderColor: theme.palette.background.default
            })}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography color="text.base" variant="body1">
                {headCell.label}
              </Typography>
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right" sx={(theme) => ({
          borderBottom: "5px solid",
          borderColor: theme.palette.background.default
        })}>
          <Typography color="text.base" variant="body1">
            Excluir
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
