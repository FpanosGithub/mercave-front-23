import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ListaAlarmas ({alarmas, onSeleccion}) {
    console.log(alarmas)
    const colorAlarma = (tipo)=> {
        if (tipo === 'CAMBIO') {return 'orange'}
        else if (tipo === 'CIRCULACION') {return 'grey'}
        else {return 'purple'}
    }
    
    return(
    <PanelListaLista>
        <Card sx={{ minWidth: 250, overflowY:'auto', pl:2, pr:1}}>
            <CardContent>
                <List dense={false} sx={{mt:-2, mb:1, pb:2}}>
                    {alarmas.activas.map((alarma, id)=>
                    (
                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                        <ListItemText 
                            primary={`Eje ${alarma.eje.codigo} - ${alarma.tipo} - ${alarma.mensaje}  - ACTIVA`}
                            secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:'darkred',
                                            mb: '0px'}}
                                        />
                                </ListItem>
                    )
                    )}
                    {alarmas.resueltas.map((alarma, id)=>
                    (
                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                        <ListItemText 
                            primary={`EJE ${alarma.eje.codigo} - ${alarma.tipo} - ${alarma.mensaje} - RESUELTA - ${alarma.informe_solucion}`}
                            secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                            primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:`${colorAlarma(alarma.tipo)}`,
                                            mb: '0px'}}
                                        />
                    </ListItem>))}
                </List>      
            </CardContent>
        </Card>
    </PanelListaLista>
    )
}


const PanelListaLista = styled.div`
    display:grid;
    overflow-y:scroll;
    width:100%;
    height:200px;
`
export default ListaAlarmas