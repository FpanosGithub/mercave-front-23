import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import CurvaTemperaturas from './CurvaTemperaturas';
import DetalleTemperaturas from './DetalleTemperaturas';

function GraficoTemperaturas ({datos}){
  return(
        <>
        <Paper elevation = {2}>
          <PanelTemperaturas>
            <CabeceraGrafica
              titulo = 'Temperaturas.'
              subtitulo = 'Evolución temp en º (intervalo seleccionado)'
              height = {65}/>
            <CurvaTemperaturas
              datos = {datos.temperaturas} 
              height = {230} />
            <DetalleTemperaturas
                tempa_max = {datos.tempa_max}
                tempa_min = {datos.tempa_min}
                tempb_max = {datos.tempa_max}
                tempb_min = {datos.tempb_min}
                />  
          </PanelTemperaturas>
        </Paper>
        </>
    );
}

export default GraficoTemperaturas

const PanelTemperaturas = styled.div`
    display:grid;
    grid-template-rows: 0fr 0fr 0fr;
    gap:1px;
    min-width:400px;
    height:24rem;
`   
