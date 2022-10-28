import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ListaAlarmas from './ListaAlarmas';

function AlarmasEjes ({alarmas, onSeleccion})
    {      
    return (
        <>
        <PanelAlarmasEjes>
        <Paper elevation = {2}>
            <Typography sx={{ fontSize: 18, p:1, mt:0, mb:0 }} color="text.secondary">
                Log de Alarmas:
            </Typography>    
        </Paper>
        <ListaAlarmas
            alarmas = {alarmas}
            onSeleccion ={onSeleccion}/>
        </PanelAlarmasEjes>
        </>
    )
    }

const PanelAlarmasEjes = styled.div`
display:grid;
grid-template-rows: 0fr 0fr;
gap:1px;
`

export default AlarmasEjes;