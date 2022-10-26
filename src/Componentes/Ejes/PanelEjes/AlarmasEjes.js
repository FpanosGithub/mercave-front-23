import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function AlarmasEjes ({alarmas})
    {      
    return (
        <>
        <PanelAlarmasEjes>
        <Paper elevation = {2} sx={{minWidth:'100%'}}>
            <Typography sx={{ fontSize: 18, ml:2, mt:1, mb:0 }} color="text.secondary">
                Log de Alarmas:
            </Typography>    
 {/*       <ListaAlarmas
            alarmas = {alarmas}/> */} 
        </Paper>  
        </PanelAlarmasEjes>
        </>
    )
    }

const PanelAlarmasEjes = styled.div`
display:grid;

`

export default AlarmasEjes;