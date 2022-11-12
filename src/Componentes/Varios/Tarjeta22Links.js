import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Tarjeta22links ({texto1, texto2, valor1, valor2, minWidth}) {
    return(
        <Card sx={{ minWidth: {minWidth}}}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {texto1}
                </Typography>
                <Typography component="div" sx={{ fontSize:16, mb:1 }}>
                        {valor1}
                </Typography>
                <Typography sx={{ fontSize: 16, mt:2 }} color="text.secondary" gutterBottom>
                        {texto2}
                </Typography>
                <Button key={valor2} variant="text" sx={{mb:-1, mt:-1, fontSize: 16, ml:0, pl:0}}>{valor2}</Button>
            </CardContent>
            </Card>
    )
}

export default Tarjeta22links