import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioVagones ({vagones, tipos, imagen}) {
    return(
        <PanelBanner>
        
        <Card sx={{ minWidth: 130 }}>
            <CardContent>
                <Typography sx={{ fontSize: 26, mt:7, textAlign:'center' }} color="text.primary" gutterBottom>
                    Vagones
                </Typography>
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Número:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    {vagones.length}
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Tipos:
                </Typography>
                <List dense={false}>
                {tipos.map((tipo, id)=>
                    (
                    <ListItem disablePadding sx= {{ml:0}} key={id}>
                        <ListItemText 
                            primary={tipo.codigo} 
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
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Km semana:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    235
                </Typography>               
            </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 125}}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Cambios sem:
                </Typography>
                <Typography sx={{ fontSize: 26, mt:4, textAlign:'center' }} color="text.primary" gutterBottom>
                    25
                </Typography>
            </CardContent>
        </Card>
        
        <TarjetaImagen
                nombre = {imagen}
                alt = ''
                height = {180}
                width = {300}/>
        </PanelBanner>  
    )
}

const PanelBanner = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 0fr;
    gap:1px;
    width:100%;
    height:11.5rem;
`
export default InicioVagones