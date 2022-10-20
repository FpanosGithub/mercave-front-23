import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioAlarmas ({alarmas}) {
    return(
        <PanelBanner>
        
        <TarjetaImagen
                nombre = 'arte/alarmasTexto.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
        <Card sx={{ minWidth: 100}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Ejes:
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 150, overflowY:'auto', mb:0, mt:0}}>
            <CardContent>
                <List dense={false}>
                        {alarmas.map((alarma, id)=>
                        (
                            <ListItem disablePadding sx= {{ml:0}} key={id}>
                                <ListItemText 
                                primary={`${alarma.eje} - ${alarma.tipo} - ${alarma.mensaje}`}
                                secondary={`${alarma.dt} - Activa: ${alarma.activa}`}
                                primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: 'light',
                                    lineHeight: '16px',
                                    color:'red',
                                    mb: '0px'}}
                                />
                            </ListItem>
                            )
                        )}
                        </List>      
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 100}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Vagones:
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 150, overflowY:'auto', mb:0, mt:0}}>
            <CardContent>
                <List dense={false}>
                        {alarmas.map((alarma, id)=>
                        (
                            <ListItem disablePadding sx= {{ml:0}} key={id}>
                                <ListItemText 
                                primary={`${alarma.eje} - ${alarma.tipo} - ${alarma.mensaje}`}
                                secondary={`${alarma.dt} - Activa: ${alarma.activa}`}
                                primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: 'light',
                                    lineHeight: '16px',
                                    mb: '0px'}}
                                />
                            </ListItem>
                            )
                        )}
                        </List>      
            </CardContent>
        </Card>

        
        <TarjetaImagen
                nombre = 'arte/alarmasImagen.jpg'
                alt = ''
                height = {285}
                width = {300}/>
        
        </PanelBanner>  
    )
}

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 0fr 1fr 0fr 1fr 0fr;

    gap:1px;
    width:100%;
    height:18rem;
`
export default InicioAlarmas