import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioActores ({actores}) {
    return(
        <PanelBanner>
        <TarjetaImagen
                nombre = 'arte/actoresTexto.jpg'
                alt = ''
                height = {180}
                width = {300}/>
        
        <Card sx={{ minWidth: 125, overflowY:'auto'  }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Owners:
                </Typography>
                <List dense={false}>
                {actores.owners.map((owner, id)=>
                    (
                    <ListItem disablePadding key = {id}>
                        <ListItemText 
                            primary={owner.organizacion} 
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

        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    keepers:
                </Typography>
                <List dense={false}>
                {actores.keepers.map((keeper, id)=>
                    (
                    <ListItem disablePadding key = {id}>
                        <ListItemText 
                            primary={keeper.organizacion} 
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

        <Card sx={{ minWidth: 140, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    E.E.M.:
                </Typography>
                <List dense={false}>
                {actores.EEMs.map((EEM, id)=>
                    (
                    <ListItem disablePadding key = {id}>
                        <ListItemText 
                            primary={EEM.organizacion} 
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

        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="darkgreen" gutterBottom>
                    Fabricantes:
                </Typography>
                <List dense={false}>
                {actores.fabricantes.map((fabricante, id)=>
                    (
                    <ListItem disablePadding key = {id}>
                        <ListItemText 
                            primary={fabricante.organizacion} 
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

        <TarjetaImagen
                nombre = 'arte/actoresImagen.jpg'
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
export default InicioActores