import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CabeceraRango ({titulo, height}) {
    return(
        <Card sx={{height : {height}}}>
            <CardContent>
                <Typography variant="h6" component="h2" color="text.secondary" sx = {{ml:0, mt:0, textAlign:'center'}}>
                    {titulo}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CabeceraRango