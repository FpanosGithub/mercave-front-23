import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Tarjeta10 ({texto1, valor1, unidades, minWidth}) {
    return(
        <Card sx={{ minWidth:{minWidth}}}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {texto1}
                </Typography>
                <Stack direction = "row" spacing = {0}>
                        <Typography sx={{ fontSize: 20, mb:-0.5, mt:2 }} color="text.primary">
                                {valor1}
                        </Typography>
                        <Typography sx={{ fontSize: 16, display:'inline-block', mt:2.5 }} color="text.secondary" gutterBottom>
                                &nbsp;{unidades}
                        </Typography>
                </Stack>     
            </CardContent>
            </Card>
    )
}

export default Tarjeta10