import Card from '@mui/material/Card';
import styled from 'styled-components';
import Tarjeta22 from '../Varios/Tarjeta22';
import Imagen from '../Varios/Imagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioAlarmas ({alarmas}) {

    return(
    <PanelAlarmas>
        <Card>
            <PanelBanner>
                <Imagen 
                    nombre='arte/alarmasTexto.jpg' 
                    alt='alarmas' 
                    height = {180} 
                    width = {300}/>
                <div></div>
                <Imagen
                    nombre = 'arte/alarmasImagen.jpg'
                    alt = 'alarmas'
                    height = {180}
                    width = {300}/>
            </PanelBanner> 
        </Card> 
        <PanelLista>
            <Tarjeta22
                texto1 = 'Alarmas de:'
                valor1 = 'EJES'
                texto2 = 'activas'
                valor2 = {alarmas.ejes.activas.length}
                minWidth= {130}/>
            <PanelListaLista>
            <Card sx={{ minWidth: 200, overflowY:'auto'}}>
                <List dense={false} sx={{mt:1, ml:3, mr:3, mb:1, pb:2}}>
                    {alarmas.ejes.activas.map((alarma, id)=>
                        (
                        <ListItem disablePadding sx= {{ml:0}} key={id}>
                            <ListItemText 
                            primary={`EJE: ${alarma.eje.codigo} - ${alarma.tipo} - ${alarma.mensaje}  - ACTIVA`}
                            secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                            primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 'light',
                                lineHeight: '16px',
                                color:'darkred',
                                mb: '0px'}}/>
                        </ListItem>
                        )
                        )}
                </List>
            </Card>
            </PanelListaLista>
            <Tarjeta22
                texto1 = 'Alarmas de:'
                valor1 = 'VAGONES'
                texto2 = 'activas'
                valor2 = {alarmas.vagones.activas.length}
                minWidth= {130}/>
            <PanelListaLista>
            <Card sx={{ minWidth: 200, overflowY:'auto'}}>
                <List dense={false} sx={{mt:1, ml:3, mr:3, mb:1, pb:2}}>
                    {alarmas.vagones.activas.map((alarma, id)=>
                        (
                        <ListItem disablePadding sx= {{ml:0}} key={id}>
                            <ListItemText 
                            primary={`VAGÓN: ${alarma.vagon.codigo} - ${alarma.tipo} - ${alarma.mensaje}  - ACTIVA`}
                            secondary={`Día: ${alarma.dt.slice(0,10)} - Hora: ${alarma.dt.slice(11,20)}`}
                            primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 'light',
                                lineHeight: '16px',
                                color:'darkred',
                                mb: '0px'}}/>
                        </ListItem>
                        )
                        )}
                </List>
            </Card>
            </PanelListaLista>
        </PanelLista>
        
    </PanelAlarmas>
    )
}

const PanelAlarmas = styled.div`
    display:grid;
    grid-template-rows: 11rem 0fr;
    gap:1px;
    width:100%;
    `
const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:180px;
    `
const PanelLista = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr 0fr 1fr;
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