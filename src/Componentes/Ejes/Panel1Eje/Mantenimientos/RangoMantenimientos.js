import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from '../../../Varios/CabeceraGrafica'
import SelectorEventos from '../../../Varios/SelectorEventos'

export default function RangoCambios({rango, setRango}) {
  return (
    <Paper elevation = {2}>
      <PanelRango>
        <CabeceraGrafica
          titulo = 'Cambios' 
          subtitulo = 'Rango'
          height = {65}/>      
        <SelectorEventos
          rango={rango}
          setRango = {setRango}
          width = {203}/>
      </PanelRango>
    </Paper>
  );
}

const PanelRango = styled.div`
display:grid;
padding:1px;
margin-left: 1px;
margin-bottom: 1px;
gap:1px;
grid-template-rows: 0fr 1fr;
`