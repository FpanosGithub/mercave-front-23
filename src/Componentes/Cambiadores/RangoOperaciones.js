import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SelectorEventosSlim from '../Varios/SelectorEventosSlim';



function RangoOperaciones ({rango, setRango, minWidth}){
    
    return(
        <>
        <PanelGeneral>
        <Paper elevation = {1} sx={{m:0.1, p:0.2, minWidth:{minWidth}}}>
        <PanelLeyenda>
            <Paper elevation = {1} sx={{mt:0, p:0.2, minWidth:{minWidth}}}>
                <Typography color="text.secondary" sx={{fontSize: 18, textAlign:'center', mt:0.4, mb:1}}>
                    Rango:
                </Typography>
            </Paper>
            <SelectorEventosSlim
                rango = {rango}
                setRango = {setRango}
                minWidth = {minWidth}/>
        </PanelLeyenda>  
        </Paper>    
        </PanelGeneral>  
        </>
    );
}
const PanelGeneral = styled.div`
    display:grid;
    height: 100%;
`
const PanelLeyenda = styled.div`
    display:grid;
    grid-template-rows: 0fr 0fr 0fr 0fr 0fr;
    justify-content:space-evenly;
    gap:1px;
    height: 100%;
`
export default RangoOperaciones