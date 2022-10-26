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
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { red, green} from '@mui/material/colors';

export default function ListaMantenimientos({mantenimientos, seleccion, onSeleccion}) {
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
    <Paper sx={{overflow: 'hidden', minWidth:450 }}>
    <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
        <Typography color={green[800]} sx={{fontSize: 18, textAlign:'center'}}>
                    LISTA DE MANTENIMIENTOS:
          </Typography>
      </Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key={'id'}>Id</TableCell>
              <TableCell key={'tipo'}>Fecha Inic.</TableCell>
              <TableCell key={'alarma'}>Alarma</TableCell>
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
                    <TableCell key='alarma'> 
                      {mantenimiento.alarma?
                        (<LensBlurOutlinedIcon fontSize='small' sx={{color: red[500]}}/>)
                        :
                        (<LensBlurOutlinedIcon fontSize='small' sx={{color: green[500]}}/>)
                      } 
                    </TableCell>
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
