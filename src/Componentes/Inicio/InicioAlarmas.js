import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';

function InicioAlarmas ({alarmas_ejes, alarmas_vagones}) {
    return(
        <PanelBanner>
        
        <TarjetaImagen
                nombre = 'arte/alarmasTexto.jpg'
                alt = ''
                height = {180}
                width = {300}/> 
        
        
        
        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Alarmas Ejes:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    {alarmas_ejes.length}
                </Typography> 
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Activas:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="red" gutterBottom>
                    {alarmas_ejes.num_activas}
                </Typography>               
            </CardContent>
        </Card>

        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Alarmas Vagones:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    {alarmas_vagones.length}
                </Typography> 
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Activas:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="red" gutterBottom>
                    {alarmas_vagones.num_activas}
                </Typography>               
            </CardContent>
        </Card>
        
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
    grid-template-columns: 0fr 1fr 1fr 1fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:11.5rem;
`
export default InicioAlarmas