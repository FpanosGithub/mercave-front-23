import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import HistogramaCambios from './HistogramaCambios';
import DatosCambioRueda from './DatosCambioRueda';


function GraficoCambio ({datos, minWidth}){
  return(
    <Paper elevation = {2} sx={{minWidth:{minWidth}}}>
    <PanelCambio>
        <CabeceraGrafica
          titulo = 'Cambio.'
          subtitulo = 'Distribución Fuerza Máxima   - kN -'
          height = {65}/>
      <HistogramaCambios
          datos = {datos.cambio} 
          height = {230} />
      <Resumen>
        <DatosCambioRueda
          rueda = 'A'
          textoA = 'Media'
          valorA = {`${datos.fca_med} kN`}
          textoB = 'Máx.'
          valorB = {`${datos.fcaM} kN`}  />
        <DatosCambioRueda
          rueda = 'B'
          textoA = 'Media'
          valorA = {`${datos.fcb_med} kN`}
          textoB = 'Máx.'
          valorB = {`${datos.fcbM} kN`} />
      </Resumen>
    </PanelCambio>
    </Paper>
);
}

const PanelCambio = styled.div`
    display:grid;
    grid-template-rows: 0fr 0fr 0fr;
    gap:1px;
    height:24rem;
`
const Resumen = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1px;
    width:100%;
`   
export default GraficoCambio