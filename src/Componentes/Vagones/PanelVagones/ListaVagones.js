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


export default function ListaVagones({vagones, onSeleccion, onHover}) {
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
    onSeleccion ({type:'SELECCIONAR_VAGON', payload:id})
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
            <TableCell key={'codigo'}>Vagón</TableCell>
              <TableCell key={'modelo'}>Tipo</TableCell>
              <TableCell key={'km_totales'}>Km Tot</TableCell>
              <TableCell key={'estado_servicio'}>Servicio</TableCell>
              <TableCell key={'km_proximo_mant'}>Km-&gt;Mto.</TableCell>
              <TableCell key={'dias_proximo_mant'}>Días-&gt;Mto.</TableCell>
              <TableCell key={'tipo_proximo_mant'}>Tipo-&gt;Mto.</TableCell>  
              <TableCell key={'alarma'}>Alarma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vagones
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                    <TableCell key='codigo'> {vagon.codigo} </TableCell>
                    <TableCell key='modelo'> {vagon.modelo} </TableCell>
                    <TableCell key={'km'}>{Math.round(vagon.km_totales)}</TableCell>
                    <TableCell key={'estado_servicio'}>{vagon.estado_servicio}</TableCell>
                    {(vagon.km_proximo_mant > 2000)?
                      <TableCell key='km_proximo_mant'> {Math.round(vagon.km_proximo_mant)} </TableCell>
                      :
                      (vagon.km_proximo_mant > 500)?
                        <TableCell key='km_proximo_mant' sx={{ color: 'violet' }}> {Math.round(vagon.km_proximo_mant)} </TableCell>
                        :
                        <TableCell key='km_proximo_mant' sx={{ color: 'red' }}> {Math.round(vagon.km_proximo_mant)} </TableCell>}
                    
                    {(vagon.dias_proximo_mant > 10)?
                      <TableCell key='dias_proximo_mant'> {vagon.dias_proximo_mant} </TableCell>
                      :
                      (vagon.dias_proximo_mant > 2)?
                        <TableCell key='dias_proximo_mant' sx={{ color: 'violet' }}> {vagon.dias_proximo_mant} </TableCell>
                        :
                        <TableCell key='dias_proximo_mant' sx={{ color: 'red' }}> {vagon.dias_proximo_mant} </TableCell>}
                    <TableCell key={'tipo_proximo_mant'}>{vagon.tipo_proximo_mant}</TableCell>
                    <TableCell key='alarma'> 
                      {(vagon.alarma)?
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
