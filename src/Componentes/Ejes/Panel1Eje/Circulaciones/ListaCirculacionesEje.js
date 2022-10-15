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
  {id: 'id',        label: 'Num.',      minWidth: 55},
  {id: 'dt',        label: 'Fecha',     minWidth: 135},
  {id: 'evento',    label: 'Evento',    minWidth: 55},
  {id: 'en_vagon',  label: 'Vagón',     minWidth: 70},
  {id: 'en_bogie',  label: 'Bogie',     minWidth: 70},
  {id: 'vel',       label: 'Velocidad', minWidth: 60},
  {id: 'tempa',     label: 'Temp. A',   minWidth: 75},
  {id: 'tempb',     label: 'Temp. B',   minWidth: 75},
];

export default function ListaCirculacionesEje({error, seleccion, onSeleccion, circulaciones}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);

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
    
    <Paper sx={{ width: 580, overflow: 'hidden', mt:0 }}>
      <Typography variant="h5" component="h2" color="text.secondary" sx = {{ml:1, mt:1, }}>
        Lista de Circulaciones
      </Typography>
      <TableContainer >
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
            {circulaciones
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
                          <Checkbox color="primary" checked={isItemSelected}/>
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
        rowsPerPageOptions={[]}
        component="div"
        count={circulaciones.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
