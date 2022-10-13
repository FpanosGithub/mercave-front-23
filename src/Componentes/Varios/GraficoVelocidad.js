import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import CurvaVelocidad from './CurvaVelocidad';
import DetalleVelocidades from './DetalleVelocidades';

function GraficoVelocidad ({datos, estado_eje, vel_eje}){
  return(
        <>
        <Paper elevation = {2}>
          <Panel>
            <CabeceraGrafica
              titulo = 'Velocidad.'
              subtitulo = 'Velocidad en m/s (intervalo seleccionado)'
              height = {65}/>
            <CurvaVelocidad
              datos = {datos.velocidades} 
              height = {230} />
            <DetalleVelocidades
              estado_eje = {estado_eje}
              vel_eje = {vel_eje}  
              vel_maxima = {datos.vel_maxima}/>
          </Panel>
        </Paper>
        </>
    );
}

export default GraficoVelocidad

const Panel = styled.div`
    display:grid;
    grid-template-rows: 0fr 0fr 0fr;
    gap:1px;
    min-width:400px;
    height:24rem;
` 
