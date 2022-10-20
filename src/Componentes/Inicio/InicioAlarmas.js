import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioAlarmas ({alarmas}) {
    const colorAlarma = (activa)=> {
        if (activa === true) {return 'darkred'}
        else {return 'grey'}
    }
    let num_activas = 0
    const ordenaLista = (alarmas)=> {
        alarmas.forEach(alarma => {if (alarma.activa) {num_activas = num_activas +1}})
        return (alarmas.sort((a,b)=> (b.activa && !a.activa)?1:-1))
    }
    const alarmas_ordenadas = ordenaLista(alarmas)
    return(
        <PanelBanner>
        
        <TarjetaImagen
                nombre = 'arte/alarmasTexto.jpg'
                alt = ''
                height = {180}
                width = {300}/>
            <PanelAlarmas>
                <PanelTitulos>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, mb:-1.8, mt:-0.5 }} color="darkgreen" gutterBottom>
                                    Ejes: Alrms: {alarmas_ordenadas.length} Activas: {num_activas} 
                            </Typography>               
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, mb:-1.8, mt:-0.5 }} color="darkgreen" gutterBottom>
                                    Vagones:
                            </Typography>               
                        </CardContent>
                    </Card>
                </PanelTitulos>
                <PanelListas>
                    <PanelListaLista>
                        <Card sx={{ minWidth: 250, overflowY:'scroll', mb:0, mt:0}}>
                            <CardContent>
                            <List dense={false}>
                                {alarmas_ordenadas.map((alarma, id)=>
                                (
                                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                                        <ListItemText 
                                        primary={`${alarma.eje} - ${alarma.tipo} - ${alarma.mensaje}`}
                                        secondary={`${alarma.dt} - Activa: ${alarma.activa}`}
                                        primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'light',
                                            lineHeight: '16px',
                                            color:`${colorAlarma(alarma.activa)}`,
                                            mb: '0px'}}
                                        />
                                    </ListItem>
                                )
                                )}
                            </List>      
                            </CardContent>
                        </Card>
                    </PanelListaLista>
                    <PanelListaLista>
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
                    </PanelListaLista>
                    
                </PanelListas>
            </PanelAlarmas>
        
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
    grid-template-columns: 0fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:16rem;
    `
const PanelAlarmas = styled.div`
    display:grid;
    grid-template-rows: 0fr 1fr;
    gap:1px;
    width:100%;
`
const PanelTitulos = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1px;
    width:100%;
`
const PanelListas = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1px;
    width:100%;
`
const PanelListaLista = styled.div`
    display:grid;
    overflow-y:scroll;
    width:100%;
    height:13rem;
`
export default InicioAlarmas