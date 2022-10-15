import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  {id: 'num_cambio_eje',  label: 'Nº',        minWidth: 20},
//  {id: 'alarma',          label: 'Alrm',      minWidth: 20},
  {id: 'cambiador',       label: 'Cambiador', minWidth: 100},
  {id: 'fdaM',            label: 'fdaM',      minWidth: 30},
  {id: 'fdbM',            label: 'fdbM',      minWidth: 30},
  {id: 'fcaM',            label: 'fcaM',      minWidth: 30},
  {id: 'fcbM',            label: 'fcbM',      minWidth: 30},
  {id: 'feam',            label: 'feam',      minWidth: 30},
  {id: 'febm',            label: 'febm',      minWidth: 30},
  {id: 'ddaM',            label: 'ddaM',      minWidth: 30},
  {id: 'ddbM',            label: 'ddbM',      minWidth: 30},
  {id: 'dcaM',            label: 'dcaM',      minWidth: 30},
  {id: 'dcbM',            label: 'dcbM',      minWidth: 30},
  {id: 'deam',            label: 'deam',      minWidth: 30},
  {id: 'debm',            label: 'debm',      minWidth: 30},
  {id: 'tdaM',            label: 'tdaM',      minWidth: 30},
  {id: 'tdbM',            label: 'tdbM',      minWidth: 30},
  {id: 'tcaM',            label: 'tcaM',      minWidth: 30},
  {id: 'tcbM',            label: 'tcbM',      minWidth: 30},
  {id: 'team',            label: 'team',      minWidth: 30},
  {id: 'tebm',            label: 'tebm',      minWidth: 30},
];

export default function ListaCambiosEje({error, cambios, seleccion, onSeleccion}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (event, id) => {
    onSeleccion(id)
  };

  const isSelected = (id) => seleccion === id;

  return (
    <>
      <Paper sx={{ width: 650, height: 670, overflow: 'hidden', mt:0 }}>
      <Typography variant="h5" component="h2" color="text.secondary" sx = {{ml:1, mt:1, }}>
        Lista de Cambios
      </Typography>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                  key={-1}
                  style={{minWidth:10}}>
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize:16 }}>
                      {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cambios
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={row.id}
                      onClick={(event) => handleClick(event,row.id)}
                      selected={isItemSelected}>

                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}/>
                      </TableCell>

                      {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}>
                                      {row[column.id]}
                        </TableCell>))}

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={cambios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
