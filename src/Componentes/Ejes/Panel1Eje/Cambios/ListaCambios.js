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

export default function ListaCambios({cambios, seleccion, onSeleccion}) {
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
                    LISTA DE CAMBIOS:
          </Typography>
      </Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key={'id'}>Id</TableCell>
              <TableCell key={'cambiador'}>Cambiador</TableCell>
              <TableCell key={'fecha'}>Fecha</TableCell>
              <TableCell key={'alarma'}>Alarma</TableCell>
              <TableCell key={'fdM'}>F.D.Max</TableCell>
              <TableCell key={'fcM'}>F.C.Max</TableCell>
              <TableCell key={'fem'}>F.E.min</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cambios
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((cambio) => {
                const isItemSelected = isSelected(cambio.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={cambio.id}
                      onClick={() => handleClick(cambio.id)}
                      selected={isItemSelected}>
                    <TableCell key='id'> {cambio.id} </TableCell>
                    <TableCell key='cambiador'> {cambio.operacion.cambiador.codigo} </TableCell>
                    <TableCell key='fecha'> {cambio.inicio.slice(0,10)} </TableCell>
                    <TableCell key='alarma'> 
                      {cambio.alarma?
                        (<LensBlurOutlinedIcon fontSize='small' sx={{color: red[500]}}/>)
                        :
                        (<LensBlurOutlinedIcon fontSize='small' sx={{color: green[500]}}/>)
                      } 
                    </TableCell>
                    <TableCell key='fdM'> {(cambio.fdaM>cambio.fdbM)?cambio.fdaM:cambio.fdbM} </TableCell>
                    <TableCell key='fcM'> {(cambio.fcaM>cambio.fcbM)?cambio.fcaM:cambio.fcbM} </TableCell>
                    <TableCell key='fem'> {(cambio.feam<cambio.febm)?cambio.feam:cambio.febm} </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
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
