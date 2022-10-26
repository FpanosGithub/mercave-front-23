import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { red, grey, green } from '@mui/material/colors';


export default function ListaOperaciones({operaciones, onSeleccion}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
  };

  const isSelected = (id) => selected === id;

  return (
    <>
    <Paper sx={{ overflow: 'hidden', minWidth:320 }}>
      <Paper elevation = {1} sx={{mt:0, p:1, mb:1}}>
        <Typography color="text.secondary" sx={{fontSize: 18, textAlign:'center'}}>
                    Lista de Operaciones de Cambio:
          </Typography>
      </Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell key={'id'}>Num</TableCell>
                <TableCell key={'dia'}>Fecha</TableCell>
                <TableCell key={'alarma'}>Alarma</TableCell>
                <TableCell key={'cambiador'}>Cambiador</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operaciones.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((operacion) => {
                const isItemSelected = isSelected(operacion.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={operacion.id}
                      onClick={(event) => handleClick(event,operacion.id)}
                      selected={isItemSelected}>
                    <TableCell key='id'> {operacion.id} </TableCell>
                    <TableCell key='dia'> {operacion.dt.slice(0,10)} </TableCell>
                    <TableCell key='alarma'> 
                      {operacion.alarma?
                          (operacion.alarma_activa?
                            (<LensBlurOutlinedIcon fontSize='small' sx={{color: red[500]}}/>)
                            :
                            (<LensBlurOutlinedIcon fontSize='small' sx={{color: grey[500]}}/>)
                          )
                          :
                          (<LensBlurOutlinedIcon fontSize='small' sx={{color: green[500]}}/>)
                      } 
                    </TableCell>
                    <TableCell key='cambiador'> {operacion.cambiador.codigo} </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={operaciones.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
