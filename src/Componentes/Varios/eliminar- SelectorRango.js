import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraGrafica from './CabeceraGrafica';
import SelectorEventos from './SelectorEventos';

function SelectorRango ({titulo, subtitulo,rango,setRango}){ 
        return (
        <Paper elevation = {2}>
        <PanelSelector>
                <CabeceraGrafica
                        titulo = {titulo} 
                        subtitulo = {subtitulo}
                        height = {65}/>      
                <SelectorEventos
                        rango={rango}
                        setRango = {setRango}
                        width = {200}
                        height = {337}/>
        </PanelSelector>
        </Paper>
        )
}

const PanelSelector = styled.div`
display:grid;
padding:1px, 1px;
margin-left: 1px;
margin-bottom: 1px;
gap:1px;
grid-template-rows: 0fr 0fr;
`
export default SelectorRango;
