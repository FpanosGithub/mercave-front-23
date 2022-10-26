import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import HistogramaCambios from './HistogramaCambios';
import DatosCambioRueda from './DatosCambioRueda';

function GraficoDescerrojamiento ({datos, minWidth}){
  return(
    <Paper elevation = {2} sx={{minWidth:{minWidth}}}>
        <PanelDescerrojamiento>
            <CabeceraGrafica
              titulo = 'Descerrojamiento.'
              subtitulo = 'Distribución Fuerza Máxima   - kN -'
              height = {65}/>
            <HistogramaCambios
              datos = {datos.descerrojamiento} 
              height = {230} />
          <Resumen>
            <DatosCambioRueda
              rueda = 'A'
              textoA = 'Media'
              valorA = {`${datos.fda_med} kN`}
              textoB = 'Máx.'
              valorB = {`${datos.fdaM} kN`} />
            <DatosCambioRueda
              rueda = 'B'
              textoA = 'Media'
              valorA = {`${datos.fdb_med} kN`}
              textoB = 'Máx.'
              valorB = {`${datos.fdbM} kN`} />
          </Resumen>
        </PanelDescerrojamiento>
      </Paper>
    );
}

const PanelDescerrojamiento = styled.div`
        display:grid;
        grid-template-rows: 0fr 0fr 0fr;
        gap:1px;
        height:100%;
`
const Resumen = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1px;
        width:100%;
`

export default GraficoDescerrojamiento