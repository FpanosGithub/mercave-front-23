import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import CabeceraRango from './CabeceraRango';
import SelectorEventos from './SelectorEventos';

function SelectorRango ({titulo,rango,setRango}){ 
        return (
        <Paper elevation = {2}>
        <PanelSelector>
                <CabeceraRango
                        titulo = {titulo} 
                        height = {65}/>      
                <SelectorEventos
                        rango={rango}
                        setRango = {setRango}
                        width = {240}
                        height = {230}/>
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
