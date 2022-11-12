import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CabeceraGrafica from './CabeceraGrafica'
import SelectorEventos from './SelectorEventos'


export default function RangoEventos({rango, setRango, mostrar, onMostrar, origen, minWidth}) {
        
        let color_circulaciones = 'success'
        let color_cambios = 'primary'
        let color_mantenimientos = 'primary' 
        if (mostrar === 'Circulaciones') {
                color_circulaciones = 'success'
                color_cambios = 'primary'
                color_mantenimientos = 'primary'
        }
        if (mostrar === 'Cambios') {
                color_circulaciones = 'primary'
                color_cambios = 'success'
                color_mantenimientos = 'primary'
        }
        if (mostrar === 'Mantenimientos') {
                color_circulaciones = 'primary'
                color_cambios = 'primary'
                color_mantenimientos = 'success'
        }
        return (<>
        <PanelSelector>
        <Paper elevation ={2} sx={{mb:0}}>
                <Button color={color_circulaciones} size="big" variant='contained' onClick = {()=>onMostrar('Circulaciones')} sx={{ fontSize: 16, textAlign:'center', ml:1, mt:1, width:190 }}>Circulaciones</Button>
                {(origen === 'Vagones')?
                        (<Button color={color_mantenimientos} size="big" variant='contained' onClick = {()=>onMostrar('Mantenimientos')} sx={{  fontSize: 16, textAlign:'center', ml:1, mt:0.5, mb:1, width:190 }}>Mantenimientos</Button>)
                        :
                        (<>
                         <Button color={color_cambios} size="big" variant='contained' onClick = {()=>onMostrar('Cambios')} sx={{  fontSize: 16, textAlign:'center', ml:1, mt:0.5, width:190 }}>Cambios</Button>
                         <Button color={color_mantenimientos} size="big" variant='contained' onClick = {()=>onMostrar('Mantenimientos')} sx={{  fontSize: 16, textAlign:'center', ml:1, mt:0.5, mb:1, width:190 }}>Mantenimientos</Button></>)
                }      
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
margin-bottom: 3px;
gap:1px;
grid-template-rows: 0fr 0fr 1fr;
`