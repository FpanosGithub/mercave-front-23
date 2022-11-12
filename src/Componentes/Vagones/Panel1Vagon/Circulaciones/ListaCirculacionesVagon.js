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

export default function ListaCirculacionesVagon({seleccion, onSeleccion, circulaciones}) {
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
    
    <Paper sx={{ overflow: 'hidden', minWidth:450, height:1100, mb:0 }}>
      <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
        <Typography color={green[800]} sx={{fontSize: 18, textAlign:'center'}}>
                    LISTA DE CIRCULACIONES:
          </Typography>
      </Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key={'id'}>Num</TableCell>
              <TableCell key={'dia_init'}>Fecha Inic.</TableCell>
              <TableCell key={'dia_fin'}>Fecha Fin</TableCell>
              <TableCell key={'alarma'}>Alarma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {circulaciones
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((circulacion) => {
                const isItemSelected = isSelected(circulacion.id);
                return (
                  <TableRow 
                        hover role="checkbox" 
                        tabIndex={-1} 
                        key={circulacion.id}
                        onClick={() => handleClick(circulacion.id)}
                        selected={isItemSelected}>
                    <TableCell key='id'> {circulacion.id} </TableCell>
                    <TableCell key='dia_init'> {circulacion.dt_inicial.slice(0,10)} </TableCell>
                    <TableCell key='dia_fin'> {circulacion.dt_final.slice(0,10)} </TableCell>
                    <TableCell key='alarma'> 
                      {circulacion.alarma?
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
