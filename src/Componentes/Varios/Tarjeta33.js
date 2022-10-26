import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Tarjeta22 ({texto1, texto2, valor1, valor2, minWidth}) {
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
                <Typography component="div" sx={{ fontSize: 16}}>
                        {valor2}
                </Typography>
            </CardContent>
            </Card>
    )
}

export default Tarjeta22