import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioAlarmas ({alarmas}) {
    console.log(alarmas)
    
    const num_activas = alarmas.ejes.activas.length + alarmas.vagones.activas.length
    const num_total = num_activas + alarmas.ejes.resueltas.length + alarmas.vagones.resueltas.length
    
    const colorAlarma = (tipo)=> {
        if (tipo === 'CAMBIO') {return 'orange'}
        else if (tipo === 'CIRCULACION') {return 'grey'}
        else {return 'purple'}
    }
    
    return(
        <PanelBanner>
        
            <TarjetaImagen
                nombre = 'arte/alarmasTexto.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
            <PanelAlarmas>
                <PanelTitulos>
                    <Card sx={{ minWidth: 170 }}>
                        <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                            Núm. Alarmas:
                        </Typography>
                        <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                            {num_total}
                        </Typography> 
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                            Alarmas Activas:
                        </Typography>
                        <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="darkred" gutterBottom>
                            {num_activas}
                        </Typography> 
                        </CardContent>
                    </Card>
                </PanelTitulos>
                <PanelLista>
                    <Card>
                        <CardContent>
                        <Typography sx={{ fontSize: 18, mb:-1, mt:0 }} color="darkgreen" gutterBottom>
                            Log de Alarmas:
                        </Typography> 
                        </CardContent>
                    </Card>
                    <PanelListaLista>
                        <Card sx={{ minWidth: 250, overflowY:'auto'}}>
                            <CardContent>
                            <List dense={false} sx={{mt:-2, mb:1, pb:2}}>
                                {alarmas.ejes.activas.map((alarma, id)=>
                                (
                                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                                        <ListItemText 
                                        primary={`EJE ${alarma.eje.codigo} - ${alarma.tipo} - ${alarma.mensaje}  - ACTIVA`}
                                        secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:'darkred',
                                            mb: '0px'}}
                                        />
                                    </ListItem>
                                )
                                )}
                                {alarmas.vagones.activas.map((alarma, id)=>
                                (
                                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                                        <ListItemText 
                                        primary={`VAGÓN ${alarma.vagon.codigo} - ${alarma.tipo} - ${alarma.mensaje} - ACTIVA`}
                                        secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:'darkred',
                                            mb: '0px'}}
                                        />
                                    </ListItem>
                                )
                                )}
                                {alarmas.ejes.resueltas.map((alarma, id)=>
                                (
                                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                                        <ListItemText 
                                        primary={`EJE ${alarma.eje.codigo} - ${alarma.tipo} - ${alarma.mensaje} - RESUELTA - ${alarma.informe_solucion}`}
                                        secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:`${colorAlarma(alarma.tipo)}`,
                                            mb: '0px'}}
                                        />
                                    </ListItem>
                                )
                                )}
                                {alarmas.vagones.resueltas.map((alarma, id)=>
                                (
                                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                                        <ListItemText 
                                        primary={`VAGÓN ${alarma.vagon.codigo} - ${alarma.tipo} - ${alarma.mensaje} - RESUELTA`}
                                        secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:`${colorAlarma(alarma.tipo)}`,
                                            mb: '0px'}}
                                        />
                                    </ListItem>
                                )
                                )}
                            </List>      
                            </CardContent>
                        </Card>
                    </PanelListaLista>
                </PanelLista>
            </PanelAlarmas>
        
        <TarjetaImagen
                nombre = 'arte/alarmasImagen.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
        </PanelBanner>  
    )
}

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:23rem;
    `
const PanelAlarmas = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr;
    gap:1px;
    width:100%;
`
const PanelTitulos = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr;
    gap:1px;
    width:100%;
`
const PanelLista = styled.div`
    display:grid;
    grid-template-rows: 4rem 1fr;
    gap:1px;
    width:100%;
`
const PanelListaLista = styled.div`
    display:grid;
    overflow-y:scroll;
    width:100%;
    height:19rem;
`
export default InicioAlarmas