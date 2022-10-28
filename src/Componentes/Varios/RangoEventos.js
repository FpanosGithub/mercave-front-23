import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CabeceraGrafica from './CabeceraGrafica'
import SelectorEventos from './SelectorEventos'
import {grey, green} from '@mui/material/colors';


export default function RangoEventos({rango, setRango, mostrar, onMostrar}) {
        
        let color1 = grey[500]
        let color2 = grey[500]
        let color3 = grey[500]

        if (mostrar === 'Circulaciones'){color1 = green[700]}
        if (mostrar === 'Cambios'){color2 = green[700]}
        if (mostrar === 'Mantenimientos'){color3 = green[700]}

        return (<>
        <PanelSelector>
        <Paper elevation ={2} sx={{mb:0}}>
                <Button size="big" variant='contained' onClick = {()=>onMostrar('Circulaciones')} sx={{  fontSize: 16, textAlign:'center', ml:1, mt:1, width:190 }}>Circulaciones</Button>
                <Button size="big" variant='contained' onClick = {()=>onMostrar('Cambios')} sx={{  fontSize: 16, textAlign:'center', ml:1, mt:0.5, width:190 }}>Cambios</Button>
                <Button size="big" variant='contained' onClick = {()=>onMostrar('Mantenimientos')} sx={{  fontSize: 16, textAlign:'center', ml:1, mt:0.5, mb:1, width:190 }}>Mantenimientos</Button>
        </Paper>
        <CabeceraGrafica
                titulo = 'Rango' 
                subtitulo = {mostrar}
                height = {65}/>      
        <SelectorEventos
                rango={rango}
                setRango = {setRango}
                width = {205}
                />
        </PanelSelector>
        </>);
}

const PanelSelector = styled.div`
display:grid;
padding:1px, 1px;
margin-left: 1px;
margin-bottom: 1px;
gap:1px;
grid-template-rows: 0fr 0fr 1fr;
`