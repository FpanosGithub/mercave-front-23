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
  {id: 'codigo', label: 'Eje', minWidth: 45},
  {id: 'version',label: 'Versión', minWidth: 65},
  {id: 'km', label: 'Kilometros', align: 'right', minWidth: 50},
  {id: 'num_cambios',label: 'Cambios', align: 'right', minWidth: 40},
  {id: 'keeper',label: 'Keeper', minWidth: 60},
  {id: 'operador',label: 'Operador', minWidth: 60},
  {id: 'fabricante',label: 'Fabricante', minWidth: 60},
  {id: 'mantenedor',label: 'Mantenedor', minWidth: 60},
  {id: 'vagon',label: 'Vagón', minWidth: 90},
];

export default function ListaEjes({ejes, onSeleccion, onHover}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
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
    onSeleccion ({type:'SELECCIONAR_EJE', payload:id})
  };

  const handleHover = (id) => {
    onHover(id)
    setSelected(id)
  };

  const isSelected = (id) => selected === id;

  return (
    <>
    <Paper sx={{ width: 890, overflow: 'hidden' }}>
      <TableContainer sx={{ height: 700 }}>
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
            {ejes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((eje) => {
                const isItemSelected = isSelected(eje.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={eje.id}
                      onClick={(event) => handleClick(event,eje.id)}
                      onMouseOver={() => handleHover(eje.id)}
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
        count={ejes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
