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

export default function ListaMantenimientos({intervenciones, seleccion, onSeleccion}) {
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
    <Paper sx={{overflow: 'hidden', minWidth:600 }}>
    <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
        <Typography color={green[800]} sx={{fontSize: 18}}>
                    LISTA DE INTERVENCIONES:
          </Typography>
      </Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key={'id'}>Id</TableCell>
              <TableCell key={'nivel'}>Nivel</TableCell>
              <TableCell key={'km'}>Km</TableCell>
              <TableCell key={'inicio'}>Fecha Inic.</TableCell>
              <TableCell key={'fin'}>Fecha Fin.</TableCell>
              <TableCell key={'c'}>Cerrada</TableCell>
              <TableCell key={'lugar'}>Lugar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {intervenciones
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((intervencion) => {
                const isItemSelected = isSelected(intervencion.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={intervencion.id}
                      onClick={() => handleClick(intervencion.id)}
                      selected={isItemSelected}>
                    <TableCell key='id'> {intervencion.id} </TableCell>
                    <TableCell key='nivel'> {intervencion.nivel} </TableCell>
                    <TableCell key='km'> {Math.round(intervencion.km)} </TableCell>
                    <TableCell key='inicio'> {intervencion.inicio} </TableCell>
                    <TableCell key='fin'> {intervencion.fin} </TableCell>
                    <TableCell key='cerrada'> 
                      {(intervencion.cerrada)?
                            (<LensBlurOutlinedIcon fontSize='small' sx={{color: green[500]}}/>)
                            :
                            (<LensBlurOutlinedIcon fontSize='small' sx={{color: red[500]}}/>)
                      }  
                        </TableCell>
                    <TableCell key='lugar'> {intervencion.punto_red.codigo} </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={intervenciones.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
