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
  {id:'codigo',    label:'Vagón',     minWidth: 85},
  {id:'modelo',    label:'Tipo',      minWidth: 60},
  {id:'keeper',    label:'Keeper',    minWidth: 70},
  {id:'operador',  label:'Operador',  minWidth: 70},
  {id:'mantenedor',label:'Mantenedor',minWidth: 70},
  {id:'alarma',    label:'Alarma',    minWidth: 40},
];

export default function ListaVagones({vagones, onSeleccion, onHover, setVerTodos}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);
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
    onSeleccion (id)
    setVerTodos(false)
  };
  const handleHover = (id) => {
    onHover(id)
    setSelected(id)
  };

  const isSelected = (id) => selected === id;

  return (
    <>
    <Paper sx={{ minWidth: 610, overflow: 'hidden' }}>
      <TableContainer sx={{ height: 520 }}>
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
            {vagones.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((vagon) => {
                const isItemSelected = isSelected(vagon.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={vagon.id}
                      onClick={(event) => handleClick(event,vagon.id)}
                      onMouseOver={() => handleHover(vagon.id)}
                      selected={isItemSelected}>
                    {columns.map((column) => {
                      const value = vagon[column.id];
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
        count={vagones.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
