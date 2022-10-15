import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import HistogramaCambios from './HistogramaCambios';
import DatosCambioRueda from './DatosCambioRueda';


function GraficoEncerrojamiento ({datos}){
  return(
    <Paper elevation = {2}>
    <PanelGeneral>
        <CabeceraGrafica
          titulo = 'Encerrojamiento.'
          subtitulo = 'Distribución Fuerza mínima  - kN -'
          height = {65}/>
        <HistogramaCambios
          datos = {datos.encerrojamiento} 
          height = {230} />
      <Resumen>
        <DatosCambioRueda
          rueda = 'A'
          textoA = 'mínima'
          valorA = {`${datos.feam} kN`}
          textoB = 'pos.'
          valorB = {`${datos.deam} mm`}/>
        <DatosCambioRueda
          rueda = 'B'
          textoA = 'mínima'
          valorA = {`${datos.febm} kN`}
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
    min-width:300px;
    height:24rem;
`
const Resumen = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1px;
    width:100%;
`   
export default GraficoEncerrojamiento