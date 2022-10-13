import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import TarjetaImagen from '../Varios/TarjetaImagen';

function InfoInicio ({elemento, sub_elemento_1, num_sub1, sub_elemento_2, num_sub2, sub_elemento_3, num_sub3, sub_elemento_4, num_sub4, imagen}) {
    return(
        <PanelBanner>
        <Card sx={{ minWidth: 140 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Cargada
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    información de:
                </Typography>
                <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
                    {elemento}
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 105 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    {sub_elemento_1}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    {num_sub1}
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 105 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    {sub_elemento_2}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    {num_sub2}
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 105 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    {sub_elemento_3}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    {num_sub3}
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 105 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    {sub_elemento_4}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    {num_sub4}
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
export default InfoInicio