import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TarjetaEjesVagon ({ejes, onSeleccion, minWidth}) {
    const handleClick = (id) => {
        onSeleccion ({type:'SELECCIONAR_EJE',payload:id})
        };

    return(
        <Card sx={{ minWidth:{minWidth}, maxWidth:120 }}>
            <CardContent>
                <Typography sx={{ mb:-0.2, fontSize: 16 }} color="text.secondary" gutterBottom>
                        Ejes:
                </Typography>
                
                {ejes.map((eje) => (
                    <Button key={eje.id} variant="text" sx={{mb:-1.2, fontSize: 16}} onClick={() => handleClick(eje.id)}>{eje.codigo}</Button>
                ))} 
            </CardContent>
            </Card>
    )
}

export default TarjetaEjesVagon