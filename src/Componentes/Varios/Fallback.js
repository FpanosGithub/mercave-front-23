import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import TarjetaImagen from './TarjetaImagen';

function Fallback ({elemento, modo, imagen}) {

    return(
        <PanelBanner>
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {modo}:&nbsp;{elemento}........
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
    grid-template-columns: 1fr 0fr;
    gap:1px;
    width:100%;
    height:11.5rem;
`


export default Fallback