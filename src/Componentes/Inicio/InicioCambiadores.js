import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioCambiadores ({cambiadores}) {
    return(
        <PanelBanner>
        
        <TarjetaImagen
                nombre = 'arte/logoMercaveInverso.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Número Cambiadores:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    2
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Códigos:
                </Typography>
                <List dense={false}>
                {cambiadores.map((cambiador, id)=>
                    (
                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                        <ListItemText 
                            primary={cambiador.codigo} 
                            primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 'light',
                                lineHeight: '12px',
                                mb: '0px'}}
                                />
                    </ListItem>
                    )
                )}
                </List>
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Cambios semana:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    235
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 140}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Cambios total:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    25543
                </Typography>
            </CardContent>
        </Card>
        
        <TarjetaImagen
                nombre = 'arte/logoMercaveInverso.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
        </PanelBanner>  
    )
}

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 0fr 1fr 1fr 1fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:11.5rem;
`
export default InicioCambiadores