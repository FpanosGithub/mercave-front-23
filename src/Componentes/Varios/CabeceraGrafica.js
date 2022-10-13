import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CabeceraGrafica ({titulo, subtitulo, height}) {
    return(
        <Card sx={{ height: {height}}}>
            <CardContent>
                <Typography sx={{ fontSize: 20, mt:-1, mb:-0.3 }} color="text.primary" gutterBottom>
                        {titulo}
                </Typography>
                <Typography sx={{ fontSize: 16, mt:0, mb:-2 }} color="text.secondary" gutterBottom>
                        {subtitulo}
                </Typography>
            </CardContent>
            </Card>
    )
}

export default CabeceraGrafica