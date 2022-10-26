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
import { red, grey} from '@mui/material/colors';


export default function ListaCambios({cambios}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(40);
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
  };

  const isSelected = (id) => selected === id;

  return (
    <>
    <Paper sx={{ overflow: 'hidden'}}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell key={'eje'}>EJE</TableCell>
                <TableCell key={'alarma'}>Alarma</TableCell>
                <TableCell key={'V'}>Velocidad</TableCell>
                <TableCell key={'FV'}>Carga</TableCell>
                <TableCell key={'fdM'}>FMaxDesc</TableCell>
                <TableCell key={'fcM'}>FMaxCamb</TableCell>
                <TableCell key={'fem'}>FminEnc</TableCell>    
            </TableRow>
          </TableHead>
          <TableBody>
            {cambios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((cambio) => {
                const isItemSelected = isSelected(cambio.id);
                return (
                  <TableRow 
                      hover role="checkbox" 
                      tabIndex={-1} 
                      key={cambio.id}
                      onClick={(event) => handleClick(event,cambio.id)}
                      selected={isItemSelected}>
                    <TableCell key='eje'> {cambio.eje.codigo} </TableCell>
                    <TableCell key='alarma'> 
                      {cambio.alarma?
                            (<LensBlurOutlinedIcon fontSize='small' sx={{color: red[500]}}/>)
                            :
                            (<LensBlurOutlinedIcon fontSize='small' sx={{color: grey[200]}}/>)
                      } 
                    </TableCell>
                    <TableCell key='V'> {cambio.V} </TableCell>
                    <TableCell key='FV'> {cambio.FV} </TableCell>
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
