import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TarjetaEnVagon ({vagon, bogie, onVolver, minWidth}) {
        
        const handleClick = () => {
                onVolver ({type:'SELECCIONAR_VAGON',payload:vagon.id})
                };
        
        return(
        <Card sx={{ minWidth: {minWidth}}}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Vagón:
                </Typography>
                <Button key={vagon.id} variant="text" sx={{mt:-1, ml:-1, fontSize: 18}} onClick={() => handleClick()}>{vagon.codigo}</Button>
                <Typography sx={{ fontSize: 16, mt:1 }} color="text.secondary" gutterBottom>
                        Bogie:
                </Typography>
                <Typography component="div" sx={{ fontSize: 18}}>
                        {bogie}
                </Typography>
            </CardContent>
            </Card>
    )
}

export default TarjetaEnVagon