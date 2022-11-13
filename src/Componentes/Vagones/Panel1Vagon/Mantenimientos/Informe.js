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
    codigo_conjunto: '101',
    conjunto: 'BASTIDOR Y ESTRUCTURA DE CAJA',
    ok: true,
    instruccion: 'MANF.IM.101.0',
    consistencias: [
        {
        codigo: '101.01',
        accion: 'Verificar ausencia de deformaciones en bastidor si:- Altura de topes queda fuera de tolerancia.- No esté asegurado el juego de placas de guarda resbaladera de cajas de grasa.- Los muelles de suspensión no juegan libremente.',
        valores: '',
        ok: true,
        r: false,
        observaciones: 'No se observa ninguna deformación'
        },
        {
        codigo: '101.02',
        accion: 'Verificar ausencia de fisuras en bastidor.',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
        codigo: '101.03',
        accion: 'Comprobar estado y fijación de pasamanos',
        valores: '',
        ok: true,
        r: false,
        observaciones: 'Enderezado montante vertical'
        },
        {
          codigo: '101.04',
          accion: 'Comprobar estado y fijación de estribos de acceso.',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        {
          codigo: '101.05',
          accion: 'Comprobar estado y fijación de soportes de baterías, depósitos, aire acondicionado, etc.',
          valores: '',
          ok: true,
          r: true,
          observaciones: 'sustituido elemento fijación de CCOMS'
        },
        {
          codigo: '101.06',
          accion: 'Comprobar que se pueden recoger, encerrojar y enclavar todos los aparatos de trabajo y medida de forma que no interfiera el gálibo',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        {
          codigo: '101.07',
          accion: 'Comprobar la ausencia en gálibo de  algún elemento roto o desprendido que pueda comprometer la seguridad en la circulación',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        {
        codigo: '101.08',
        accion: 'Comprobar  ausencia de fisuras en puntos de fijación de elementos suspendidos bajo chasis',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
          codigo: '101.09',
          accion: 'Comprobar estado de sujeciones de elementos suspendidos bajo chasis',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        {
          codigo: '101.10',
          accion: 'Comprobar el soporte del bastidos, que no esté suelto, fisurado o roto. Y no está deformado impidiendo el juego libre de los muelles de suspensión',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        ]
    },
    {
    codigo_conjunto: '104',
    conjunto: 'CONJUNTO DE CHOQUE',
    ok: true,
    instruccion: 'MANF.IM.104.0',
    consistencias: [
        {
        codigo: '104.01',
        accion: 'Comprobar ausencia de fisuras en contratopes, así como holguras entre cabecero y contratope',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
        codigo: '104.02',
        accion: 'Verificar altura del tope: para una altura nominal de 1060 mm.',
        valores: 'entre 940 y 1080 mm',
        ok: true,
        r: false,
        observaciones: ''
        },
        {
        codigo: '104.03',
        accion: 'Verificar distancia entre ejes de topes de un mismo testero',
        valores: '1850 +/- 10 mm',
        ok: true,
        r: false,
        observaciones: ''
        },

        {
          codigo: '104.04',
          accion: 'Comprobar plato de choque no está ausente, no está roto y no está girado si es rectangular',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
          },
          {
          codigo: '104.05',
          accion: 'Comprobar apriete de todos los pernos de sujeción',
          valores: '',
          ok: true,
          r: false,
          observaciones: 'Algunos pernos fueron reajustados'
          },
          {
          codigo: '104.06',
          accion: 'Desmontar y comprobar el buen estado de todos los elementos',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        {
          codigo: '104.07',
          accion: 'Desmontar y verificar muelles bajo prensa',
          valores: '',
          ok: true,
          r: false,
          observaciones: 'Desmontados, verificados y vueltos a montar'
          },
          {
          codigo: '104.08',
          accion: 'Comprobar ausencia de fisuras y deformaciones',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
          },
          {
          codigo: '104.09',
          accion: 'Engrasar la guía del gancho y la placa de desgaste',
          valores: '',
          ok: true,
          r: false,
          observaciones: 'Aplicada grasa consistente Molikote 603'
        },
        {
          codigo: '104.10',
          accion: 'Verificar carrera del tope',
          valores: '105 ó 75 mm.',
          ok: true,
          r: false,
          observaciones: 'carrera de 105 mm'
        },
        ]
    },
    {
    codigo_conjunto: '105',
    conjunto: 'CONJUNTO DE TRACCIÓN',
    ok: true,
    instruccion: 'MANF.IM.105.0',
    consistencias: [
        {
              codigo: '105.01',
              accion: 'Comprobar estado y correcto giro de la cabeza de la manija y que las tuercas se despalacen a lo largo del husillo',
              valores: '',
              ok: true,
              r: false,
              observaciones: ''
        },
        {
              codigo: '105.02',
              accion: 'Comprobar desplazamiento del gancho',
              valores: '',
              ok: true,
              r: false,
              observaciones: ''
        },
        {
              codigo: '105.03',
              accion: 'Engrasar el husillo del tensor',
              valores: '',
              ok: false,
              r: true,
              observaciones: 'Engrasado'
        },
        {
          codigo: '105.04',
          accion: 'Verificar detección por magnetoscopia del gancho y horquilla de tracción',
          valores: '',
          ok: true,
          r: false,
          observaciones: ''
        },
        {
          codigo: '105.05',
          accion: 'Desmontar y comprobar el buen estado de todos los elementos',
          valores: '',
          ok: true,
          r: true,
          observaciones: 'Cambiado 2 tornillos'
        },
        {
          codigo: '105.06',
          accion: 'Verificar altura del gancho de tracción',
          valores: '',
          ok: true,
          r: true,
          observaciones: ''
        }
        ]
    },
    {
    codigo_conjunto: '110',
    conjunto: 'ROTULACIÓN',
    ok: true,
    instruccion: 'MANF.IM.110.0',
    consistencias: [
      {
        codigo: '110.01',
        accion: 'Comprobar  que está rotulado en ambos costados: - Número UIC - Matrícula de infraestructura (opcional) - Velocidad máxima - Placa con año y número de fabricación (opcional) - Longitud entre topes - Empate - Empate del bogie (si lo lleva) - Tara  - Carga máxima (si admite carga) - Peso freno de estacionamiento (vehículos de línea y velocidad mayor de 80 Km/h) - Peso freno neumático en cada régimen (vehíc. de línea y veloc. mayor de 80 Km/h) - Leyenda "NO CORTOCIRCUITA LA VÍA" (vehículos que no shunten) - La Placa de Identificación del material motor/autopropulsado, podrá ir en la cabina de conducción o en ambos laterales. - Los vehículos con cambiador de régimen de frenado llevarán rotuladas en dicho cambiador las posiciones G y P (o su equivalente M y V) y R si la tuviera. Lo mismo ocurrirá con las posiciones aislado y conectado de la llave de aislamiento.',
        valores: '',
        ok: true,
        r: false,
        observaciones: 'Repasado número UIC que estaba arañado'
      },
      {
        codigo: '110.02',
        accion: 'Comprobar que todos los rótulos y pictogramas relacionados con los equipos de seguridad van rotulados en castellano',
        valores: '',
        ok: true,
        r: false,
        observaciones: ''
      }
      ]
    },
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

export default function Informe() {
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