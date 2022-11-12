import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { green} from '@mui/material/colors';

export default function InformeIntervencion({mantenimientos, seleccion, onSeleccion}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (id) => {
    onSeleccion(id)
  };

  const isSelected = (id) => seleccion === id;

  return (
    <>
    <Paper sx={{overflow: 'hidden', minWidth:550 }}>
    <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
        <Typography color={green[800]} sx={{fontSize: 18, textAlign:'center'}}>
                    INFORME DE LA INTERVENCIÓN:
          </Typography>
      </Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key={'id'}>Id</TableCell>
              <TableCell key={'tipo'}>tipo</TableCell>
              <TableCell key={'inicio'}>Fecha Inic.</TableCell>
              <TableCell key={'fin'}>Fecha Fin.</TableCell>
              <TableCell key={'abierto'}>Abierto</TableCell>
              <TableCell key={'lugar'}>Lugar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mantenimientos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((mantenimiento) => {
                const isItemSelected = isSelected(mantenimiento.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={mantenimiento.id}
                      onClick={() => handleClick(mantenimiento.id)}
                      selected={isItemSelected}>
                    <TableCell key='id'> {mantenimiento.id} </TableCell>
                    <TableCell key='tipo'> {mantenimiento.tipo} </TableCell>
                    <TableCell key='inicio'> {mantenimiento.tipo} </TableCell>
                    <TableCell key='fin'> {mantenimiento.tipo} </TableCell>
                    <TableCell key='abierto'> {mantenimiento.tipo} </TableCell>
                    <TableCell key='lugar'> --- </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={mantenimientos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
