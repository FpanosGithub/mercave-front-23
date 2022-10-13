import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function ResumenRangoCambios({dias,horas,height}) {
        return (<>
                <Card sx={{height : {height}}}>
                        <CardContent>
                                <Typography sx={{ fontSize: 18, mt:-1, mb:0 }} color="text.secondary" gutterBottom>
                                        Intervalo seleccionado:
                                </Typography>
                                <Typography sx={{ fontSize: 16, mt:1, mb:0 }} color="green" gutterBottom>
                                        &nbsp;&nbsp; {dias} Días
                                </Typography>
                                <Typography sx={{ fontSize: 16, mt:0, mb:-1 }} color="green" gutterBottom>
                                        &nbsp;&nbsp; {horas} Horas
                                </Typography>
                        </CardContent>
                </Card>
                </>)
}