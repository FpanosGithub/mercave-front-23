import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function InicioActores ({actores, imagen}) {
    return(
        <PanelBanner>
        <Card sx={{ minWidth: 130 }}>
            <CardContent>
                
                <Typography sx={{ fontSize: 26, mt:7, textAlign:'center' }} color="text.primary" gutterBottom>
                    Actores
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 125, overflowY:'auto'  }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Operadores:
                </Typography>
                <List dense={false}>
                {actores.operadores.map((operador, id)=>
                    (
                    <ListItem disablePadding key = {id}>
                        <ListItemText 
                            primary={operador.organizacion} 
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
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    keepers:
                </Typography>
                <List dense={false}>
                {actores.operadores.map((operador, id)=>
                    (
                    <ListItem disablePadding key = {id}>
                        <ListItemText 
                            primary={operador.organizacion} 
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
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
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
        <Card sx={{ minWidth: 125, overflowY:'auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Mantenedores:
                </Typography>
                <List dense={false}>
                {actores.mantenedores.map((fabricante, id)=>
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
export default InicioActores