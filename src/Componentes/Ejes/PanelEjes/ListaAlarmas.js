import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  {id: 'id', label: 'ID', minWidth: 20},
  {id: 'eje',label: 'Eje', minWidth: 45, align:'center'},
  {id: 'dt', label: 'Dia/Hora',minWidth: 90},
  {id: 'tipo',label: 'Tipo', minWidth: 50},
  {id: 'mensaje',label: 'mensaje', minWidth: 100},
];

export default function ListaAlarmas({alarmas, onSeleccion}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [selected, setSelected] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (event, id) => {
    setSelected(id)
//    onSeleccion ({type:'SELECCIONAR_EJE', payload:id})
  };

  const isSelected = (id) => selected === id;

  return (
    <>
    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ height: 205 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                      {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {alarmas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((eje) => {
                const isItemSelected = isSelected(eje.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={eje.id}
                      onClick={(event) => handleClick(event,eje.id)}
                      selected={isItemSelected}>
                    {columns.map((column) => {
                      const value = eje[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={alarmas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
