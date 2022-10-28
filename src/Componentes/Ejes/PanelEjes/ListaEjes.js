import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { red, green } from '@mui/material/colors';


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
    <Paper sx={{ minWidth: 600, overflow: 'hidden' }}>
      <TableContainer sx={{ height: 760 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell key={'codigo'}>Eje</TableCell>
              <TableCell key={'version'}>Version</TableCell>
              <TableCell key={'vagon'}>Vagón</TableCell>
              <TableCell key={'km'}>Km Tot</TableCell>
              <TableCell key={'num_cambios'}>Cambios</TableCell>
              <TableCell key={'fecha_ultimo_mant'}>Último Mant.</TableCell>
              <TableCell key={'km_proximo_mant'}>Km-&gt;Mto.</TableCell>
              <TableCell key={'alarma'}>Alarma</TableCell>
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
                    <TableCell key='codigo'> {eje.codigo} </TableCell>
                    <TableCell key='version'> {eje.version} </TableCell>
                    <TableCell key={'vagon'}>{eje.vagon}</TableCell>
                    <TableCell key={'km'}>{eje.km}</TableCell>
                    <TableCell key={'num_cambios'}>{eje.num_cambios}</TableCell>
                    <TableCell key='fecha_ultimo_mant'> {eje.fecha_ultimo_mant} </TableCell>
                    <TableCell key='km_proximo_mant'> {eje.km_proximo_mant} </TableCell>
                    <TableCell key='alarma'> 
                      {(eje.alarma_temp||eje.alarma_aceleraciones||eje.alarma_cambio||eje.alarma_mantenimiento)?
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
