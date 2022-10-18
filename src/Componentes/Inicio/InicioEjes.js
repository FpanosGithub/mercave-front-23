import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioEjes ({ejes, versiones}) {
    console.log(ejes)
    return(
        <PanelBanner>
        
        <TarjetaImagen
                nombre = 'arte/ejesTexto.jpg'
                alt = ''
                height = {180}
                width = {300}/> 
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Número:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    {ejes.length}
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Versiones:
                </Typography>
                <List dense={false}>
                {versiones.map((version, id)=>
                    (
                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                        <ListItemText 
                            primary={version.codigo} 
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
                    Km semana:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    940
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 140}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Cambios sem:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    100
                </Typography>
            </CardContent>
        </Card>
        
        <TarjetaImagen
                nombre = 'arte/ejesImagen.jpg'
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
export default InicioEjes