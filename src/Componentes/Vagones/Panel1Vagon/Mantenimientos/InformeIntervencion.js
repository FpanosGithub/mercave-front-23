import * as React from 'react';
import styled from 'styled-components';
import Informe from './Informe';
import InformeEjes from './InformeEjes';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BuildIcon from '@mui/icons-material/Build';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {grey, green} from '@mui/material/colors';

export default function InformeIntervencion({mantenimientos, seleccion, onSeleccion}) {

  return (
    <>
    <Paper sx={{overflow: 'hidden', minWidth:550 }}>
      
      <Paper elevation = {1} sx={{mt:0, p:1.5, mb:1}}>
      <PanelTitulo>
        <Typography sx={{fontSize: 16, ml:2}}>
                    VAGÓN:
        </Typography>
        {/*<BuildIcon fontSize='medium' sx={{ color: grey[500], mt:0.2 }}/>*/}
        <Typography color="text.secondary" sx={{fontSize: 16, fontWeight: 700, ml:2}}>
                    IM
        </Typography>
        <CheckBoxIcon fontSize='medium' sx={{ color: green[500], ml:4 }}/>
      </PanelTitulo>
      </Paper>
      {/* ********** */}
      <Informe/>
      {/* ********** */}

      <Paper elevation = {1} sx={{mt:1, p:1.5, mb:1}}>
        <Typography sx={{fontSize: 16, ml:2}}>
                    EJES :
        </Typography>
      </Paper>
      <Paper elevation = {1} sx={{mt:1, p:1, mb:1}}>
        <PanelTitulo>
          <Typography sx={{fontSize: 16, ml:2}}>
                    EAV10.001
          </Typography>
          <Typography color="text.secondary" sx={{fontSize: 16, fontWeight: 700, ml:2}}>
                    IS1
          </Typography>
          <CheckBoxIcon fontSize='medium' sx={{ color: green[500], ml:4 }}/>
        </PanelTitulo>
      </Paper>
      {/* ********** */}
      <InformeEjes/>
      {/* ********** */}

      <Paper elevation = {1} sx={{mt:1, p:1.5, mb:1}}>
        <Typography sx={{fontSize: 16, ml:2}}>
                    EJES :
        </Typography>
      </Paper>
      <Paper elevation = {1} sx={{mt:1, p:1, mb:1}}>
        <PanelTitulo>
          <Typography sx={{fontSize: 16, ml:2}}>
                    EAV10.002
          </Typography>
          <Typography color="text.secondary" sx={{fontSize: 16, fontWeight: 700, ml:2}}>
                    IS2
          </Typography>
          <CheckBoxIcon fontSize='medium' sx={{ color: green[500], ml:4 }}/>
        </PanelTitulo>
      </Paper>
      {/* ********** */}
      <InformeEjes/>
      {/* ********** */}

      <Paper elevation = {1} sx={{mt:1, p:1.5, mb:1}}>
        <Typography sx={{fontSize: 16, ml:2}}>
                    EJES :
        </Typography>
      </Paper>
      <Paper elevation = {1} sx={{mt:1, p:1, mb:1}}>
        <PanelTitulo>
          <Typography sx={{fontSize: 16, ml:2}}>
                    EAV10.003
          </Typography>
          <Typography color="text.secondary" sx={{fontSize: 16, fontWeight: 700, ml:2}}>
                    IM
          </Typography>
          <CheckBoxIcon fontSize='medium' sx={{ color: green[500], ml:4 }}/>
        </PanelTitulo>
      </Paper>
      {/* ********** */}
      <InformeEjes/>
      {/* ********** */}

      <Paper elevation = {1} sx={{mt:1, p:1.5, mb:1}}>
        <Typography sx={{fontSize: 16, ml:2}}>
                    EJES :
        </Typography>
      </Paper>
      <Paper elevation = {1} sx={{mt:1, p:1, mb:1}}>
        <PanelTitulo>
          <Typography sx={{fontSize: 16, ml:2}}>
                    EAV10.004
          </Typography>
          <Typography color="text.secondary" sx={{fontSize: 16, fontWeight: 700, ml:2}}>
                    IS3
          </Typography>
          <CheckBoxIcon fontSize='medium' sx={{ color: green[500], ml:4 }}/>
        </PanelTitulo>
      </Paper>
      {/* ********** */}
      <InformeEjes/>
      {/* ********** */}

    </Paper>
    </>
  );
}

const PanelTitulo = styled.div`
display:grid;
grid-template-columns: 1fr 0fr 0fr 0fr;
justify-content:'stretch';
width:100%;
`
