import * as React from 'react';
import {green, pink} from '@mui/material/colors';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const data = [
    {
    codigo_conjunto: 'EAV-C-10',
    conjunto: 'CERROJO',
    ok: true,
    instruccion: 'TRIA.IM.C.10',
    consistencias: [
        {
        codigo: 'C10.01',
        accion: 'Guardapolvo sin grietas y tapa soporte sin abolladuras ni grietas. Tornillos de fijación de tapa soporte en su sitio.',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: 'No se observa ninguna deformación'
        },
        {
        codigo: 'C10.02',
        accion: 'Horquillas Monobloque fijas con todos sus tornillos',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
        codigo: 'C10.03',
        accion: 'Semi-compases unidos no se aprecia perdida de tuercas o bulones',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
          codigo: 'C10.04',
          accion: 'Tuercas del eje de compases frenadas correctamente con arandelas. No se pueden mover a mano.',
          tipo: 'I. Visual/Manual',
          valores: '',
          ok: true,
          r: false,
          observaciones: 'Reapretadas 3 tuercas en cerrojo del lado A'
        },
        {
        codigo: 'C10.05',
        accion: 'Discos de fricción. Fijos en posición no se aprecia perdida de tornillos ni alambres de frenado',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        }
      ]
    },
    {
    codigo_conjunto: 'EAV-R-10',
    conjunto: 'CONJUNTO RUEDAS',
    ok: true,
    instruccion: 'TRIA.IM.R.10',
    consistencias: [
        {
        codigo: 'R10.01',
        accion: 'Rodadura correcta sin planos, ni excesivo desgaste. No se aprecian fisuras ni grietas en rodadura ni velo de rueda.',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: 'Correcto en ruedas A y B'
        },
        {
        codigo: 'R10.02',
        accion: 'Engrasadores montados con tapón puesto',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: true,
        observaciones: 'Se repone 1 tapa en Rueda B'
        },
        {
        codigo: 'R10.03',
        accion: 'Tornilleria de unión Rueda/Base_soporte en posición y frenados',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
        codigo: 'R10.04',
        accion: 'Tornilleria de unión Rueda/Base_soporte en posición y frenados',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
          codigo: 'R10.05',
          accion: 'Ensayo de ultrasonidos. Sin anomalías',
          tipo: 'Ensayo',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        }
      ]
    },
    {
    codigo_conjunto: 'EAV-C-10',
    conjunto: 'CONJUNTO EJE',
    ok: true,
    instruccion: 'TRIA.IM.E.10',
    consistencias: [
        {
        codigo: 'E10.01',
        accion: 'No se aprecian golpes, grietas o fisuras en la parte interior visible del eje',
        tipo: 'I. Visual',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
        codigo: 'E10.02',
        accion: 'Ensayo de ultrasonidos. Sin anomalías',
        tipo: 'Ensayo',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        }
        ]
    }
]

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.codigo_conjunto}</TableCell>
        <TableCell>{row.conjunto}</TableCell>
        <TableCell>
            {row.ok ? <CheckBoxIcon sx={{ color: green[500]}}/> : <CheckBoxOutlineBlankIcon />}
        </TableCell>
        <TableCell>{row.instruccion}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="consistencias">
                <TableHead>
                  <TableRow>
                    <TableCell>Cod.</TableCell>
                    <TableCell>Accion</TableCell>
                    <TableCell>Tipo Ins.</TableCell>
                    <TableCell>Valores</TableCell>
                    <TableCell>OK</TableCell>
                    <TableCell>R</TableCell>
                    <TableCell>Obs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.consistencias.map((consistencia) => (
                    <TableRow key={consistencia.codigo}>
                      <TableCell component="th" scope="row">{consistencia.codigo}</TableCell>
                      <TableCell>{consistencia.accion}</TableCell>
                      <TableCell>{consistencia.tipo}</TableCell>
                      <TableCell>{consistencia.valores}</TableCell>
                      <TableCell>
                        {consistencia.ok ? <CheckIcon sx={{ color: green[500]}}/> : <ClearIcon sx={{ color: pink[500]}}/>}
                      </TableCell>
                      <TableCell>
                        {consistencia.r ? <CheckIcon /> : <></>}
                      </TableCell>
                      <TableCell>{consistencia.observaciones}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function InformeEjes() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>CÓDIGO</TableCell>
            <TableCell>CONJUNTO</TableCell>
            <TableCell>OK</TableCell>
            <TableCell>Instrucción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.codigo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}