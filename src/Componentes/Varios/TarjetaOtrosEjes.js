import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TarjetaOtrosEjes ({otros_ejes, vagon, onVolver}) {
    
    const handleClick = (eje) => {
        onVolver ({type:'SELECCIONAR_EJE',payload:eje.id})
        };

    return(
        <Card sx={{ minWidth: 110 }}>
            <CardContent>
                <Typography sx={{ fontSize: 10 }} gutterBottom>
                        Otros ejes en:
                </Typography>
                <Typography sx={{ fontSize: 16 }} gutterBottom>
                        {vagon}
                </Typography>
                {otros_ejes.map((eje) => (
                    <Button key={eje.id} variant="text" sx={{mb:-1}} onClick={() => handleClick(eje)}>{eje.codigo}</Button>
                ))} 
            </CardContent>
            </Card>
    )
}

export default TarjetaOtrosEjes