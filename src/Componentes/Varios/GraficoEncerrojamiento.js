import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import HistogramaCambios from './HistogramaCambios';
import DatosCambioRueda from './DatosCambioRueda';


function GraficoEncerrojamiento ({datos, minWidth}){
  return(
    <Paper elevation = {2} sx={{minWidth:{minWidth}}}>
    <PanelGeneral>
        <CabeceraGrafica
          titulo = 'Encerrojamiento.'
          subtitulo = 'Distribución F. mín.(kN)'
          height = {65}/>
        <HistogramaCambios
          datos = {datos.encerrojamiento} 
          height = {230} />
      <Resumen>
        <DatosCambioRueda
          rueda = 'A'
          textoA = 'mín.'
          valorA = {datos.feam}
          textoB = 'pos.'
          valorB = {`${datos.deam} mm`}/>
        <DatosCambioRueda
          rueda = 'B'
          textoA = 'mín.'
          valorA = {datos.febm}
          textoB = 'pos.'
          valorB = {`${datos.debm} mm`}/>  
      </Resumen>
    </PanelGeneral>
    </Paper>
);
}

const PanelGeneral = styled.div`
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
export default GraficoEncerrojamiento