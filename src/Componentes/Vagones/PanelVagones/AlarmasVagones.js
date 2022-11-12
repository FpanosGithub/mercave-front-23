import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function AlarmasVagones ({alarmas, onSeleccion})
    {  
    const colorAlarma = (tipo)=> {
        if (tipo === 'CAMBIO') {return 'orange'}
        else if (tipo === 'CIRCULACION') {return 'grey'}
        else if (tipo === 'TEMPERATURA') {return 'pink'}
        else if (tipo === 'MANTENIMIENTO') {return 'green'}
        else if (tipo === 'TRANSMISION') {return 'black'}
        else if (tipo === 'OPERACION') {return 'purple'}
        else if (tipo === 'GENERAL') {return 'grey'}
        else {return 'purple'}
        }   
    const handleClick = (id) => {
        onSeleccion ({type:'SELECCIONAR_VAGON', payload:id})
        }; 
    return (<>
        <PanelAlarmas>
            <Paper elevation = {2}>
                <Typography sx={{ fontSize: 18, p:1, mt:0, mb:0 }} color="text.secondary">
                            Log de Alarmas:
                </Typography>    
            </Paper>
            <PanelLista>
                <Card sx={{ minWidth: 250, overflowY:'auto', pl:2, pr:1}}>
                    <CardContent>
                        <List dense={false} sx={{mt:-2, mb:1, pb:2}}>
                            {alarmas.activas.map((alarma, id)=>
                            (
                            <ListItem disablePadding sx= {{ml:0}} key={id}>
                                <ListItemButton onClick = {()=>handleClick (alarma.eje.id)}>
                                    <ListItemText 
                                        primary={`VAGÓN ${alarma.vagon.codigo} - ${alarma.tipo} - ${alarma.mensaje}`}
                                        secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                        primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:'darkred',
                                            mb: '0px'}}/>
                                </ListItemButton>
                                <Button size="small" variant="outlined" sx={{m:1, width:120}}>Eliminar</Button>
                            </ListItem>
                            ))}
                            {alarmas.resueltas.map((alarma, id)=>
                            (
                            <ListItem disablePadding sx= {{ml:0}} key={id}>
                                <ListItemButton onClick = {()=>handleClick (alarma.vagon.id)}>
                                    <ListItemText 
                                        primary={`VAGÓN ${alarma.vagon.codigo} - ${alarma.tipo} - ${alarma.mensaje} - ${alarma.informe_solucion}`}
                                        secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                        primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:`${colorAlarma(alarma.tipo)}`,
                                            mb: '0px'}}/>
                                </ListItemButton>
                            </ListItem>))}
                        </List>      
                    </CardContent>
                </Card>
            </PanelLista>
        </PanelAlarmas>
    </>)
}

const PanelAlarmas = styled.div`
display:grid;
grid-template-rows: 0fr 0fr;
gap:1px;
`
const PanelLista = styled.div`
    display:grid;
    overflow-y:scroll;
    width:100%;
    height:165px;
`
export default AlarmasVagones;