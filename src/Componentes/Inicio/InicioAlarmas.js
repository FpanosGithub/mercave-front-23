import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';


function InicioAlarmas ({alarmas}) {
    return(
        <PanelBanner>
        
        <TarjetaImagen
                nombre = 'arte/logoMercaveInverso.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
        
        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Lista de Alarmas:
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
    grid-template-columns: 0fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:11.5rem;
`
export default InicioAlarmas